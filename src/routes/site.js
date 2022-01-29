const express = require("express");
const router = express.Router();
const siteController = require("../app/controllers/SiteController");

// newsController.index
// slug dùng để tạo nhiều tuyến đường phụ
// luôn đặt tuyến đường chính dưới cùng
router.use("/search", siteController.search);
router.use("/", siteController.home);
module.exports = router;
