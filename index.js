// Load dependencies
const aws = require('aws-sdk');
const fs = require('fs'); // Needed for example below
const TeachableMachine = require("@sashido/teachablemachine-node");
const soil = require("./route/soil")
const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');


const spacesEndpoint = new aws.Endpoint('sgp1.digitaloceanspaces.com');
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  accessKeyId: "",
  secretAccessKey: ""
});

const model = new TeachableMachine({
  modelUrl: "https://teachablemachine.withgoogle.com/models/7q6X7Z9na/"
});

const app = express();

// // Set S3 endpoint to DigitalOcean Spaces
app.use("/",soil)


// // Change bucket property to your Space name
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'thisistesting',
    acl: 'public-read',
    contentType : multerS3.AUTO_CONTENT_TYPE,
    key: function (request, file, cb) {
        request.fileName = file["originalname"]
      console.log(file);
      cb(null, file.originalname);
    }
  })
}).array('upload', 1);

// // Views in public directory
app.use(express.static('public'));

// Main, error and success views
app.get('/', function (request, response) {
  response.sendFile(__dirname + '/public/index.html');
});


app.get("/success", function (request, response) {
  response.sendFile(__dirname + '/public/success.html');
});

app.get("/error", function (request, response) {
  response.sendFile(__dirname + '/public/error.html');
});

app.post('/image', function (request, response, next) {
  upload(request, response, function (error) {
    if (error) {
      console.log(error);
      return response.redirect("/error");
    }

     const imgUrl = `https://thisistesting.sgp1.digitaloceanspaces.com/${request.fileName}`
     model.classify({
    imageUrl: imgUrl,
    }).then((predictions) => {
    console.log("Predictions:", predictions);
    return response.json({data:predictions})
    }).catch((e) => {
    console.log("ERROR", e);
    return response.send("error");
    });    

  });
});

app.listen(3000, function () {
  console.log('Server listening on port 3000.');
});




