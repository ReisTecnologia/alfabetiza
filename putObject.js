var AWS = require('aws-sdk'),
  fs = require('fs')

fs.readFile('../fileName', function(err, data) {
  if (err) {
    throw err
  }

  var s3 = new AWS.S3({
    // accessKeyId: '',
    // secretAccessKey: '',
  })
  s3.putObject(
    {
      Bucket: 'alfabetiza',
      Key: 'fileName',
      Body: data,
      ContentType: 'audio/m4a',
      ACL: 'public-read',
    },
    function() {
      console.log(arguments)
      console.log('Success')
    }
  )
})
