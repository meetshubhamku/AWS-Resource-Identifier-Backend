const express = require("express");
const {
  listEc2Instances,
  listSecurityGroups,
  ScanSG_Mysql,
} = require("./EC2Controller");
const EC2Router = express.Router();
EC2Router.get("/ec2/list", listEc2Instances);
EC2Router.get("/ec2/sg/list", listSecurityGroups);
EC2Router.get("/ec2/sg/mysql", ScanSG_Mysql);

module.exports = EC2Router;
