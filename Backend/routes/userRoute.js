const express = require("express");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });
const router = express.Router();
const {
  profile,
  profileUpdate,
  passwordupdate,
} = require("../controllers/userController");
const { verifyToken } = require("../utils/verifyUser");
router.get("/profile", verifyToken, profile);
router.put(
  "/profileupdate",
  verifyToken,
  upload.single("profilePicture"),
  profileUpdate
);
router.put("/passwordupdate", verifyToken, passwordupdate);
module.exports = router;
