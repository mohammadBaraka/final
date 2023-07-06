import db from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import express from "express";
const router = express.Router();

router.post("/register", async (req, res) => {
  const sql = /*sql*/ `SELECT * FROM users WHERE email = ? OR first_name = ? `;
  try {
    const data = await new Promise((resolve, reject) => {
      db.get(sql, [req.body.email, req.body.first_name], (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });

    // *************//VALIDATE\\***********************
    if (!req.body.first_name)
      return res.status(409).json("User Field Is Required!");
    if (!req.body.email)
      return res.status(409).json("Email Field Is Required!");
    if (req.body.password !== req.body.passwordConfirm)
      return res.status(409).json("Password Does Not Much!");
    // *************//VALIDATE\\***********************
    if (data) return res.status(409).json("User Already Exists");

    try {
      // Hash the Password
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(req.body.password || "", salt);

      const insertSql = /*sql*/ `INSERT INTO users (first_name, email, phone_number, address, password , passwordConfirm) VALUES (?, ?, ?, ?, ? , ?)`;
      const values = [
        req.body.first_name,
        req.body.email,
        req.body.phone_number,
        req.body.address,
        hash,
      ];

      db.run(insertSql, values, (err, data) => {
        if (err) return res.json(err);
        res.status(200).json({
          message: "User Created Successfully!",
          data,
        });
      });
    } catch (error) {
      console.log(error);
      res.status(500).json("An error occurred during password hashing.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("An error occurred during database query.");
  }
});

/*--------------------------- Login ----------------------------*/
router.post("/login", (req, res, next) => {
  const sql = /*sql*/ `SELECT * FROM users WHERE first_name = ?`;
  try {
    db.get(sql, [req.body.first_name], (err, data) => {
      //? *************\\VALIDATE\\***********************
      if (!req.body.first_name)
        return res.status(409).json("User Field Is Required!");

      //? *************\\VALIDATE\\***********************
      // Handle query errors
      if (err) {
        console.log(err);
        return res.status(500).json("Internal Server Error");
      }

      //? =====================CHECK IF THE USER EXISTS=====================
      if (!data) {
        return res.status(400).json("User Not Found!");
      }

      //? =====================CHECK THE PASSWORD=====================

      if (!req.body.password) {
        return res.status(400).json("Password Field Is Required!");
      }

      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        data.password || ""
      );
      if (!isPasswordCorrect) {
        return res.status(400).json("Wrong Username or Password!");
      }

      //? =====================GENERATE TOKEN=====================
      // Generate token
      const token = jwt.sign({ id: data.id }, "jwtkey");

      //? =====================REMOVE SENSITIVE DATA FROM USER OJECTS=====================

      const { password, ...userWithoutPassword } = data;

      //? =====================SEND TOKEN AND USER DETAILS IN RESPONSE=====================

      res
        .cookie("check_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({
          message: "Loged in Successfully!",
          data: userWithoutPassword,
          token,
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("An error occurred during login.");
  }
});

/*--------------------------- Signup ----------------------------*/
router.post("/logout", async (req, res) => {
  res
    .clearCookie("check_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User Has Been Loged");
});

export default router;
