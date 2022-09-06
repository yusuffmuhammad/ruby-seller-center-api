import multer from "multer";

const path = "src/public/images/stores";
const fileSize = 3000000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "--" + file.originalname);
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
