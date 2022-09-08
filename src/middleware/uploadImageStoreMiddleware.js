import multer from "multer";
import path from "path";

const filePath = "src/public/images/stores";
const fileSize = 3000000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, filePath);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  },
});

const filter = (req, file, cb) => {
  cb(null, true);
};

let upload = multer({
  storage: storage,
  fileFilter: filter,
  limits: { fileSize },
});

export default upload.single("image");
