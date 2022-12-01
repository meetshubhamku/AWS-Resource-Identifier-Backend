const {
  S3Client,
  ListBucketsCommand,
  GetBucketAclCommand,
} = require("@aws-sdk/client-s3");
const credentials = require("../../Credentials");

const client = new S3Client(credentials);

exports.listBuckets = async (req, res) => {
  console.log(credentials);
  const params = {};
  try {
    const data = await client.send(new ListBucketsCommand(params));
    return res.json({ data, isSuccess: true }).status(200);
  } catch (err) {
    return res.json({ error: err, isSuccess: false, path: req.url });
  }
};

exports.getBucketAcl = async (req, res) => {
  const params = {
    Bucket: req.params.bucketName,
  };
  try {
    const data = await client.send(new GetBucketAclCommand(params));
    res.json({ data, isSuccess: true }).status(200);
  } catch (err) {
    res.json({ error: err, isSuccess: false, path: req.url });
  }
};
