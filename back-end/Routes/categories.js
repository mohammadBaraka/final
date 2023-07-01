import db from "../db.js";
import express from "express";
const router = express.Router();
/*---------------------------Get Categories----------------------------*/
router.get("/", (req, res, next) => {
  const sql =
    "select * from categories join images where categories.categories_id = images.products_product_id";
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
  const sql = "select * from categories where categories_id = ?";
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

/*---------------------------Create Categories----------------------------*/

router.post("/", (req, res, next) => {
  const errors = [];
  if (!req.body.type_name) {
    errors.push("No type_name specified");
  }
  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }
  const data = {
    type_name: req.body.type_name,
  };

  const sql = "INSERT INTO categories (type_name) VALUES (?)";
  const params = [data.type_name];
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

/*------------------------------Update Categories---------------------------*/

router.patch("/:id", (req, res, next) => {
  const data = {
    type_name: req.body.type_name,
  };
  db.run(
    `UPDATE categories set 
        type_name = COALESCE(?,type_name)               
           WHERE categories_id = ?`,
    [data.type_name, req.params.id],

    function (err, result) {
      console.log(data.type_name);
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

/*---------------------------Delete Categories-------------------------------------------*/

router.delete("/:id", (req, res, next) => {
  db.run(
    "DELETE FROM categories WHERE categories_id = ?",
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
