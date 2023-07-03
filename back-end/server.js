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
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "./public"))); // <-- location of public dir
app.use(cors());
app.get("/", (req, res, next) => {
  res.json({ message: "Ok" });
});

app.use("/api", user);
app.use("/api", categories);
app.use("/api", sub_categories);
app.use("/products", products);
app.use("/api", auth);

app.use((err, req, res, next) => {
  console.error(err);
  const message = err.message;
  res.status(500).json({ success: false, message });
});

/*--------------------------------------Router------------------------------------------*/

const HTTP_PORT = process.env.PORT || 8000;
app.listen(HTTP_PORT, () => {
  console.log(`Server Running On Port http://localhost:${HTTP_PORT}`);
});
