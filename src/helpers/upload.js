import multer from "multer";

const path = "src/public/images";
const fileSize = 3000000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

let upload = multer({
  storage: storage,
  limits: { fileSize },
});

export default upload.single("image");
