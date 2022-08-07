const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRoutes = require("./routes/AuthRoutes");

const app = express();

dotenv.config();
app.use(cors());
app.use(fileupload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const imageSchema = mongoose.Schema({
  imageName: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
});

const image = mongoose.model("image", imageSchema);

//Connecting to the database
mongoose.connect(process.env.MONGO_URL, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Connected to DB successfully");
});

//Routes
app.use("/auth", AuthRoutes);

//Route to upload images to database
app.post("/images/upload", async (req, res) => {
  const file = req.files.file;
  const filename = req.body.filename;
  const savefolder = __dirname + "/front/src/Assets/";

  //Function to move files to the desires folder
  file.mv(`${savefolder}${filename}`, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "File upload failed", code: 200 });
    }
    res.status(200).send({ message: "File Uploaded", code: 200 });
  });

  //Function to save the details of the uploaded image to the database
  const newImage = new image({
    imageName: filename,
    imagePath: __dirname + "/" + filename,
  });

  try {
    await newImage.save();
  } catch (error) {
    res.status(300).send(error);
    console.log(error);
  }
});
//Route to query images from DB AND send images to the user client
app.get("/images/getimages", async (req, res) => {
  image.find({}, (error, result) => {
    if (error) {
      res.send(error);
    }
    res.send(result);
  });
});
//file to be run on hosting
if (process.env.NODE_ENV === "production") {
  app.use(express.static("front/build"));
}

//Initializing the port and running the server
const port = process.env.PORT || 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`App is running on port ${port}`);
  }
});
