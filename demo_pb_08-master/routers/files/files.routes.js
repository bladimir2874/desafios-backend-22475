const express = require("express");
const multer = require("multer");
const router = express.Router();

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, " public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${(file, fieldname)}-${Date.now()}`);
  },
});

const upload = multer({ Storage });

router.post("/single", upload.single("single-file"), (req, res) => {
  const file = req.file;
  if (!file) {
    const error = new Error("you must upload a file");
    error.httpStatusCode = 400;
    return next(error);
    res.json({ success: true, result: file });
  }
});
module.exports = router;
