const express = require("express");
const cors = require("cors");


const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const authRoute = require("./routes/auth");
const clientauthRoute = require("./routes/client_auth");
const categoryRoute = require("./routes/categories");
const lawyerRoute = require("./routes/lawyer");
const caseRoute = require("./routes/case");
const clientRoute = require("./routes/client");
const postRoute = require("./routes/posts");
const videoRoute=require("./routes/video");

dotenv.config();
app.use(express.json());
app.use(cors())
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.Mongo_Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,


  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/clientAuth", clientauthRoute);
//http:localhost   /lawyer(post)
app.use("/api/lawyers", lawyerRoute);
// app.use("/api/cases", caseRoute);
app.use("/api/client", clientRoute);
 app.use("/api/cases", caseRoute);
// app.use("/api/categories", categoryRoute);
// app.use("/api/video", videoRoute);

app.listen("5000", () => {
  console.log("Backend is running.");
});