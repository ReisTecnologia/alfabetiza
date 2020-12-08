var express = require('express')
var multer = require('multer')
const AWS = require('aws-sdk')
const serverless = require('serverless-http')

var upload = multer()
var app = express()

var s3 = new AWS.S3({
  credentials: AWS.Credentials(
    process.env.MY_AWS_ACCESS_KEY_ID,
    process.env.MY_AWS_SECRET_ACCESS_KEY
  ),
})

app.post(
  '/.netlify/functions/fileUpload',
  upload.single('fileupload'),
  (req, res) => {
    s3.putObject(
      {
        Bucket: 'alfabetizaserver',
        Key: req.body.filename,
        Body: Buffer.from(req.file.buffer),
        ContentType: req.file.mimetype,
      },
      function(response) {
        console.log(arguments)
        console.log('Success')
      }
    )
    res.send(req.file.mimetype)
    res.end()
  }
)
module.exports.handler = serverless(app)
