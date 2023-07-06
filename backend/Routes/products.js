import db from "../db.js";
import express from "express";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/products");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

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

router.get("/cat/:id", (req, res, next) => {
  const sql = /*sql*/ `SELECT * FROM products JOIN users on users.id = products.users_id WHERE sub_categories_id = ?`;
  const params = [req.params.id];
  db.all(sql, params, (err, row) => {
    if (err) return res.status(400).json({ error: err.message });
    if (row.length === 0) return res.status(404).json("Categories Not Found!");
    res.json({
      message: "success",
      data: row,
    });
  });
});
/*-----------------------------Create Product-------------------------------*/

router.post("/upload", function (req, res) {
  upload(req, res, function (err) {
    console.log(err);
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
      // A Multer error occurred when uploading.
    } else if (err) {
      return res.status(500).json(err);
      // An unknown error occurred when uploading.
    }

    return res.status(200).send(req.file);
    // Everything went fine.
  });
});

/*-----------------------------Update Product-------------------------------*/

router.put("/:id", (req, res, next) => {
  const sql = /*sql */ `UPDATE products set 
  price = COALESCE(?,price), 
  title = COALESCE(?,title) ,
  description = COALESCE(?,description), 
  users_id =  COALESCE(? ,users_id ),                 
  sub_categories_id =  COALESCE(? ,sub_categories_id ),                
  images =  COALESCE(? ,images )                
  WHERE product_id = ?`;
  const { price, title, description, users_id, sub_categories_id } = req.body;
  const params = [price, title, description, users_id, sub_categories_id];
  db.run(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: result,
      changes: this.changes,
    });
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
      res.json({ message: "deleted", changes: this.changes });
    }
  );
});

export default router;
