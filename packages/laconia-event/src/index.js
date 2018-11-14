const S3EventInputConverter = require("./S3EventInputConverter");
const S3StreamInputConverter = require("./S3StreamInputConverter");
const S3JsonInputConverter = require("./S3JsonInputConverter");

exports.s3Event = () => () => ({
  $inputConverter: new S3EventInputConverter()
});

exports.s3Stream = () => ({ $s3 }) => ({
  $inputConverter: new S3StreamInputConverter($s3)
});

exports.s3Json = () => ({ $s3 }) => ({
  $inputConverter: new S3JsonInputConverter($s3)
});
