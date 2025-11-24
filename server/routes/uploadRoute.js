const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage
});

router.post("/upload-image", upload.single("image"), (req, res) => {
    const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
    res.json({
        url: imageUrl
    });
});

module.exports = router;