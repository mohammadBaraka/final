import db from "../db.js";
import express from "express";
const router = express.Router();

// ? *---------------------------GET ALL USERS----------------------------*/

router.get("/users", (req, res, next) => {
  const sql = /*sql*/ `select * from users `;
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }

    res.json({
      data: rows,
    });
  });
});
// ? *---------------------------GET USER WIHT OUT HIS PRODUCT----------------------------*/

router.get("/user/:id", (req, res) => {
  const sql = /*sql*/ `SELECT * FROM users where id = ?`;
  const id = [req.params.id];
  try {
    db.get(sql, id, (err, row) => {
      if (err) return res.status(409).json(err.message);
      if (!row) return res.status(404).json("User Not Found!");
      res.status(200).json({
        message: "OK",
        data: row,
      });
    });
  } catch (error) {
    console.log(error);
  }
});

// ? *---------------------------GET USER WIHT HIS PRODUCT----------------------------*/

router.get("/users/:id", (req, res, next) => {
  const sql = /*sql*/ `
  SELECT users.*, products.*
  FROM users
  JOIN products ON products.users_id = users.id
  WHERE users.id = ?`;

  const params = [req.params.id];
  db.all(sql, params, (err, rows) => {
    if (err) return res.status(400).json({ error: err.message });
    if (rows.length === 0)
      return res.status(404).json("There Is No User With Products");

    const user = {
      id: rows[0].id,
      first_name: rows[0].first_name,
      email: rows[0].email,
      phone_number: rows[0].phone_number,
      address: rows[0].address,
      password: rows[0].password,
      passwordConfirm: rows[0].passwordConfirm,
      products: rows.map((row) => ({
        product_id: row.product_id,
        price: row.price,
        description: row.description,
        title: row.title,
        users_id: row.users_id,
        sub_categories_id: row.sub_categories_id,
        images: row.images,
      })),
    };

    res.json({
      message: "success",
      data: user,
    });
  });
});

/*---------------------------Create Users----------------------------*/

router.post("/", (req, res, next) => {
  const errors = [];
  if (!req.body.first_name) {
    errors.push("No first_name specified");
  }
  if (!req.body.password) {
    errors.push("No password specified");
  }
  if (!req.body.email) {
    errors.push("No email specified");
  }
  if (!req.body.address) {
    errors.push("No address specified");
  }
  if (!req.body.phone_number) {
    errors.push("No phone_number specified");
  }
  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }
  const data = {
    first_name: req.body.first_name,
    password: req.body.password,
    email: req.body.email,
    address: req.body.address,
    phone_number: req.body.phone_number,
  };

  const sql =
    "INSERT INTO users (first_name, password, email, address, phone_number) VALUES (?,?,?,?,?)";
  const params = [
    data.first_name,
    data.password,
    data.email,
    data.address,
    data.phone_number,
  ];
  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: data,
      id: this.lastID,
    });
  });
});

/*----------------------  ---------Update Users----------------------------*/

router.patch("/:id", (req, res, next) => {
  const data = {
    first_name: req.body.first_name,
    password: req.body.password,
    email: req.body.email,
    address: req.body.address,
    phone_number: req.body.phone_number,
  };
  db.run(
    `UPDATE users set 
        first_name = COALESCE(?,first_name), 
        password = COALESCE(?,password) ,
        email = COALESCE(?,email), 
        address =  COALESCE(? ,address ),                 
        phone_number =  COALESCE(? ,phone_number )                
           WHERE id = ?`,
    [
      data.first_name,
      data.password,
      data.email,
      data.address,
      data.phone_number,
      req.params.id,
    ],
    function (err, result) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes,
      });
    }
  );
});

/*-------------------------------Delete Users-----------------------------------*/

router.delete("/:id", (req, res, next) => {
  db.run(
    "DELETE FROM users WHERE id = ?",
    req.params.id,
    function (err, result) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({ message: "deleted", changes: this.changes });
    }
  );
});

export default router;
