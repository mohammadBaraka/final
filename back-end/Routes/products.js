import db from "../db";
import express from "express";
const router = express.Router();

/*---------------------------Get Products------------------------*/

router.get("/", (req, res, next) => {
  const sql = "select * from products";
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }

    res.json({
      message: "success",
      data: rows
    });
  });
});

router.get("/:id", (req, res, next) => {
  const sql = "select * from products where product_id = ?";
  const params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row
    });
  });
});

/*-----------------------------Create Product-------------------------------*/

router.post("/", (req, res, next) => {
  const errors = [];
  if (!req.body.price) {
    errors.push("No price specified");
  }
  if (!req.body.description) {
    errors.push("No description specified");
  }
  if (!req.body.title) {
    errors.push("No title specified");
  }
  if (!req.body.users_id) {
    errors.push("No users_id specified");
  }
  if (!req.body.sub_categories_id) {
    errors.push("No sub_categories_id specified");
  }
  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }
  const data = {
    price: req.body.price,
    description: req.body.description,
    title: req.body.title,
    users_id: req.body.users_id,
    sub_categories_id: req.body.sub_categories_id
  };

  const sql =
    "INSERT INTO products (price, description, title, users_id, sub_categories_id) VALUES (?,?,?,?,?)";
  const params = [
    data.price,
    data.description,
    data.title,
    data.users_id,
    data.sub_categories_id
  ];
  db.run(sql, params, function(err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: data,
      id: this.lastID
    });
  });
});

/*-----------------------------Update Product-------------------------------*/

router.patch("/:id", (req, res, next) => {
  const data = {
    price: req.body.price,
    title: req.body.title,
    description: req.body.description,
    users_id: req.body.users_id,
    sub_categories_id: req.body.sub_categories_id
  };
  db.run(
    `UPDATE products set 
        price = COALESCE(?,price), 
        title = COALESCE(?,title) ,
        description = COALESCE(?,description), 
        users_id =  COALESCE(? ,users_id ),                 
        sub_categories_id =  COALESCE(? ,sub_categories_id )                
           WHERE product_id = ?`,
    [
      data.price,
      data.title,
      data.description,
      data.users_id,
      data.sub_categories_id,
      req.params.id
    ],
    function(err, result) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes
      });
    }
  );
});

/*-----------------------------Delete Product-------------------------------*/

router.delete("/:id", (req, res, next) => {
  db.run("DELETE FROM products WHERE product_id = ?", req.params.id, function(
    err,
    result
  ) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: "deleted", changes: this.changes });
  });
});

export default router;
