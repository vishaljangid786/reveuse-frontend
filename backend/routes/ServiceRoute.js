// serviceRoutes.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = require("../config/cloudinary");
const {
  getServices,
  createService,
  updateService,
  deleteService,
} = require("../controllers/ServiceController");

const upload = multer({ storage });

router.get("/", getServices);
router.post("/", upload.single("image"), createService);
router.put("/:id", upload.single("image"), updateService);
router.delete("/:id", deleteService);

module.exports = router;
