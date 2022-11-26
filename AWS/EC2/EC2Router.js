const express = require("express");
const { listEc2Instances, listSecurityGroups } = require("./EC2Controller");
const EC2Router = express.Router();
EC2Router.get("/ec2/list", listEc2Instances);
EC2Router.get("/ec2/sg/list", listSecurityGroups);

module.exports = EC2Router;
