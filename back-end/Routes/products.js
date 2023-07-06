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
  const sql = "select * from products ";
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
  const sql = "select * from products where sub_categories_id = ?";
  const params = [req.params.id];
  db.all(sql, params, (err, row) => {
    if (err) return res.status(400).json({ error: err.message });
    if (row > 3) return res.status(404).json("Categories Not Found!");
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

router.post("/images", upload.array("files"), (req, res, next) => {
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
  if (!req.body.images) {
    errors.push("No sub_categories_id specified");
  }
  if (req.files.length > 0) {
    errors.push("No images provided");
  }
  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }
  const data = {
    price: req.body.price,
    description: req.body.description,
    title: req.body.title,
    images: req.body.images,
    users_id: 1,
    sub_categories_id: req.body.sub_categories_id,
  };

  const sql =
    "INSERT INTO products (price, description, title, users_id, sub_categories_id , images) VALUES (?,?,?,?,?,?)";
  const params = [
    data.price,
    data.description,
    data.title,
    data.users_id,
    data.sub_categories_id,
    data.images,
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

/*-----------------------------Update Product-------------------------------*/

router.patch("/:id", (req, res, next) => {
  const data = {
    price: req.body.price,
    title: req.body.title,
    description: req.body.description,
    users_id: req.body.users_id,
    users_id: req.body.images,
    sub_categories_id: req.body.sub_categories_id,
  };
  db.run(
    `UPDATE products set 
        price = COALESCE(?,price), 
        title = COALESCE(?,title) ,
        description = COALESCE(?,description), 
        users_id =  COALESCE(? ,users_id ),                 
        sub_categories_id =  COALESCE(? ,sub_categories_id ),                
        images =  COALESCE(? ,images )                
           WHERE product_id = ?`,
    [
      data.price,
      data.title,
      data.description,
      data.users_id,
      data.sub_categories_id,
      data.sub_images,
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
