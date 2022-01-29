const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;
const route = require("./routes");
// cú pháp chèn ảnh
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
// http logger
// app.use(morgan("combined"));
// template Engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
// xử lí đường dẫn đến page views
app.set("views", path.join(__dirname, "resources/views"));
// Route Init
route(app);
// ====================================== //
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
