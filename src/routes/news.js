const express = require("express");
const router = express.Router();
const newsController = require("../app/controllers/NewsController");

// newsController.index
// slug dùng để tạo nhiều tuyến đường phụ
// luôn đặt tuyến đường chính dưới cùng
router.use("/:slug", newsController.show);
router.use("/", newsController.index);
module.exports = router;
