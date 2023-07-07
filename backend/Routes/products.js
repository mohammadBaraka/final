import db from "../db.js";
import express from "express";
import jwt from "jsonwebtoken";
const router = express.Router();

/*---------------------------Get Products------------------------*/

router.get("/", (req, res, next) => {
  const sql = req.query.cat
    ? /*sql*/ `SELECT * FROM products WHERE cat_name = ?`
    : /*sql*/ `SELECT * FROM products`;

  db.all(sql, [req.query.cat], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

router.get("/:id", (req, res, next) => {
  const sql = /*sql*/ `SELECT * FROM products JOIN users on users.id = products.users_id WHERE product_id = ?`;
  const params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

router.post("/", (req, res) => {
  const token = req.cookies.check_token;
  if (!token) return res.status(401).json("You're Not Authorized");
  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err)
      return res
        .status(500)
        .json({ err: err.message, error: "Error creating a new post." });

    const sql = /*sql*/ `INSERT INTO products (price , description , title , images , cat_name , users_id) VALUES(?,?,?,?,?,?)`;
    const { price, description, title, cat_name, images } = req.body;
    // TODO ==========================//VALIDATE//============================================
    if (!title) return res.status(400).json("Title Faild Is Required!");
    if (!price) return res.status(400).json("Price Faild Is Required!");
    if (!description)
      return res.status(400).json("Description Faild Is Required!");
    if (!cat_name)
      return res.status(400).json("Sellect Categorie Of Your Product!");
    if (!images) return res.status(400).json("No Images Uploaded!");
    // TODO ==========================//VALIDATE//============================================
    const params = [price, description, title, images, cat_name, userInfo.id];
    try {
      db.run(sql, [...params], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({
          message: "Create Post Successfully!",
          price,
          description,
          title,
          images,
          cat_name,
        });
      });
    } catch (error) {
      console.log(error);
      res.status(500).json("An error occurred.");
    }
  });
});

/*-----------------------------Update Product-------------------------------*/

// router.put("/:id", (req, res) => {
//   const token = req.cookies.check_token;
//   if (!token) return res.status(401).json("Not Authrised");
//   jwt.verify(token, "jwtkey", (err, userInfo) => {
//     if (err)
//       return res
//         .status(500)
//         .json({ err: err.message, error: "Error Updating a new post." });

//     const sql = /*sql*/ `UPDATE products SET price = ? ,  description = ? , title = ? , images = ? , cat_name = ? WHERE product_id = ?`;
//     const { price, description, title, images, cat_name } = req.body;
//     const productID = req.params.id;
//     const params = [
//       price,
//       description,
//       title,
//       images,
//       cat_name,
//       userInfo.id,
//       productID,
//     ];
//     try {
//       db.run(sql, params, (err, result) => {
//         if (err) return res.status(500).json({ errror: err.message });
//         res.status(200).json({
//           message: "Create Post Successfully!",
//           price,
//           description,
//           title,
//           images,
//           cat_name,
//         });
//       });
//     } catch (error) {
//       console.log(error);
//       res.status(500).json("An error occurred.");
//     }
//   });
// });

router.put("/:id", (req, res) => {
  const token = req.cookies.check_token;
  if (!token) return res.status(401).json("Not Authorized");
  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err)
      return res
        .status(500)
        .json({ err: err.message, error: "Error Updating a new post." });

    const sql = /*sql*/ `UPDATE products SET price = ?, description = ?, title = ?, images = ?, cat_name = ? WHERE product_id = ? AND users_id = ?`;
    const { price, description, title, images, cat_name } = req.body;
    // TODO ==========================//VALIDATE//============================================
    if (!title) return res.status(400).json("Title Faild Is Required!");
    if (!price) return res.status(400).json("Price Faild Is Required!");
    if (!description)
      return res.status(400).json("Description Faild Is Required!");
    if (!cat_name)
      return res.status(400).json("Sellect Categorie Of Your Product!");
    if (!images) return res.status(400).json("No Images Uploaded!");
    // TODO ==========================//VALIDATE//============================================
    const productID = req.params.id;
    const params = [
      price,
      description,
      title,
      images,
      cat_name,
      productID,
      userInfo.id,
    ];
    try {
      db.run(sql, params, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({
          message: "Update Post Successfully!",
          price,
          description,
          title,
          images,
          cat_name,
        });
      });
    } catch (error) {
      console.log(error);
      res.status(500).json("An error occurred.");
    }
  });
});

/*-----------------------------Delete Product-------------------------------*/

router.delete("/:id", (req, res, next) => {
  db.run(
    "DELETE FROM products WHERE product_id = ?",
    req.params.id,
    function (err, result) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: "Delete Product Successfully",
      });
    }
  );
});

export default router;
