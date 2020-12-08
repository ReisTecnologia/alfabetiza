var express = require('express')
var multer = require('multer')
const AWS = require('aws-sdk')
const serverless = require('serverless-http')
const cors = require('cors')

var upload = multer()
var app = express()

var s3 = new AWS.S3({
  accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST,DELETE')
  app.use(cors())
  next()
})

app.post(
  '/.netlify/functions/fileUpload',
  upload.single('fileupload'),
  (req, res) => {
    return s3.putObject(
      {
        Bucket: 'alfabetizaserver',
        // Key: req.body.filename,
        Key: 'web app postman',
        Body: Buffer.from(req.file.buffer),
        ContentType: req.file.mimetype,
      },
      function(response) {
        console.log(arguments)
        console.log('Success')
      }
    )
  }
)
module.exports.handler = serverless(app)
