import db from "../db.js";
import express from "express";
const router = express.Router();

/*---------------------------Get Sub Categories-----------------------------*/

router.get("/cat", (req, res, next) => {
  const sql = "select * from sub_categories";
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
  const sql = "select * from sub_categories where sub_categories_id = ?";
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

/*---------------------------Create Sub Categories-----------------------------*/

router.post("/", (req, res, next) => {
  const errors = [];
  if (!req.body.name) {
    errors.push("No name specified");
  }
  if (!req.body.categories_id) {
    errors.push("No categories_id specified");
  }

  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }
  const data = {
    name: req.body.name,
    categories_id: req.body.categories_id,
  };

  const sql = "INSERT INTO sub_categories (name , categories_id) VALUES (?,?)";
  const params = [data.name, data.categories_id];
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

/*---------------------------Update Sub Categories-----------------------------*/

router.patch("/:id", (req, res, next) => {
  const data = {
    name: req.body.name,
    categories_id: req.body.categories_id,
  };
  db.run(
    `UPDATE sub_categories set 
        name = COALESCE(?,name), 
        categories_id = COALESCE(?,categories_id)        
           WHERE sub_categories_id = ?`,
    [data.name, data.categories_id, req.params.id],
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

/*---------------------------Delete Sub Categories-----------------------------*/

router.delete("/:id", (req, res, next) => {
  db.run(
    "DELETE FROM sub_categories WHERE sub_categories_id = ?",
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
