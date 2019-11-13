import db from "../db";
import express from "express";
const router = express.Router();

/*--------------------------- Login ----------------------------*/
router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  const sql = "select * from categories";
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

/*--------------------------- Signup ----------------------------*/
router.post("/signup", (req, res, next) => {
  const sql = "select * from categories";
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

export default router;
