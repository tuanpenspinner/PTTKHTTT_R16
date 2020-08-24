const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3001;
const path = require("path");
const productRoute = require("./routers/product.route");
const connectDB = require("./dbs/db");
app.listen(process.env.PORT || PORT, () => {
  console.log("Listing port " + PORT);
});
connectDB();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/product",productRoute)
