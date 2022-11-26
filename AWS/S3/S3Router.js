const express = require("express");
const { listBuckets, getBucketAcl } = require("./S3Controller");
const s3Router = express.Router();
s3Router.get("/s3/list", listBuckets);
s3Router.get("/s3/acl/:bucketName", getBucketAcl);
module.exports = s3Router;
