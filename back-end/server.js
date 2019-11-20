import express from "express";
import path from "path";
const app = express();
import bodyParser from "body-parser";
import cors from "cors";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
import user from "./Routes/users";
import categories from "./Routes/categories";
import sub_categories from "./Routes/sub categories";
import products from "./Routes/products";
import images from "./Routes/Multer/multer";
const HTTP_PORT = 8000;

// app.use(function(req, res) {
//   res.status(404);
// });

// Start server
app.use(express.static(path.join(__dirname, "./public"))); // <-- location of public dir
app.use(cors());
app.get("/", (req, res, next) => {
  res.json({ message: "Ok" });
});
app.use((err, req, res, next) => {
  console.error(err);
  const message = err.message;
  res.status(500).json({ success: false, message });
});

app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

/*--------------------------------------Router------------------------------------------*/

app.use("/user", user);
app.use("/categories", categories);
app.use("/sub_categories", sub_categories);
app.use("/products", products);
app.use("/images", images);
