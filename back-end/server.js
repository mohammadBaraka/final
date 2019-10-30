import express from "express";
const app = express();
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
import user from "./Components/users";
import categories from "./Components/categories";
import sub_categories from "./Components/sub categories";
import products from "./Components/products";
import images from "./Components/Multer/multer";
const HTTP_PORT = 8080;

// app.use(function(req, res) {
//   res.status(404);
// });

// Start server

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
app.use("/Imges", images);
