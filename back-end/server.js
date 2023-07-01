// import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import user from "./Routes/users.js";
import categories from "./Routes/categories.js";
import sub_categories from "./Routes/subCategories.js";
import products from "./Routes/products.js";
import express from "express";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, "./public"))); // <-- location of public dir
app.use(cors());
app.get("/", (req, res, next) => {
  res.json({ message: "Ok" });
});
app.use((err, req, res, next) => {
  console.error(err);
  const message = err.message;
  res.status(500).json({ success: false, message });
});

/*--------------------------------------Router------------------------------------------*/

app.use("/user", user);
app.use("/categories", categories);
app.use("/sub_categories", sub_categories);
app.use("/products", products);
const HTTP_PORT = process.env.PORT || 8000;
app.listen(HTTP_PORT, () => {
  console.log(`Server Running On Port http://localhost:${HTTP_PORT}`);
});
