// import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import user from "./Routes/users.js";
import categories from "./Routes/categories.js";
import sub_categories from "./Routes/subCategories.js";
import auth from "./Routes/authorization.js";
import products from "./Routes/products.js";
import express from "express";
import cookieParser from "cookie-parser";
import multer from "multer";
const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//? *********************UPLOAD AN IMAGE**************************

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../frontend/public/upload");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json("No file uploaded.");
    }

    res.status(200).json(file.filename);
  } catch (error) {
    console.log(error);
    res.status(500).json("Error uploading the file.");
  }
});

//? *********************//UPLOAD AN IMAGE\\**************************
//?================================ROUTING============================================
app.use("/api", user);
app.use("/api", categories);
app.use("/api", sub_categories);
app.use("/products", products);
app.use("/api", auth);

// app.use((err, req, res, next) => {
//   console.error(err);
//   const message = err.message;
//   res.status(500).json({ success: false, message });
// });
//?================================SERVER===============================================

const HTTP_PORT = process.env.PORT || 8000;
app.listen(HTTP_PORT, () => {
  console.log(`Server Running On Port http://localhost:${HTTP_PORT}`);
});
