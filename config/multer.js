const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname); // Get the original file extension
    cb(null, file.fieldname + "-" + uniqueSuffix + extension); // Append the extension to the new filename
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
