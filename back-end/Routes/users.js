import db from "../db.js";
import express from "express";
const router = express.Router();

/*---------------------------Get Users----------------------------*/

router.get("/", (req, res, next) => {
  const sql =
    "select * from users join products where products.product_id = users_id";
  const params = [];
  db.all(sql, params, (err, rows) => {
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
  const sql = "select * from users where id = ?";
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
