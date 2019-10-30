import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import db from "../../db";
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

// ROUTES

router.get("/", (req, res, next) => {
  const sql = "select * from images";
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }

    res.sendFile(__dirname + "/index.html");
  });
});

router.get("/:id", (req, res, next) => {
  const sql = "select * from images where image_id = ?";
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

// SET STORAGE
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  }
});

const upload = multer({ storage: storage });

router.post("/uploadfile", upload.single("myFile"), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});

export default router;
