const {
  EC2Client,
  DescribeInstancesCommand,
  DescribeSecurityGroupsCommand,
} = require("@aws-sdk/client-ec2");
const credentials = require("../../Credentials");
const DangerRuleset = require("./SGRuleset");
const client = new EC2Client(credentials);

exports.listEc2Instances = async (req, res) => {
  const params = {};
  try {
    const data = await client.send(new DescribeInstancesCommand(params));
    return res.json({ data, isSuccess: true }).status(200);
  } catch (err) {
    return res.json({ error: err, isSuccess: false, path: req.url });
  }
};

exports.listSecurityGroups = async (req, res) => {
  const params = {};
  try {
    const data = await client.send(new DescribeSecurityGroupsCommand(params));
    return res.json({ data, isSuccess: true }).status(200);
  } catch (err) {
    return res.json({ error: err, isSuccess: false, path: req.url });
  }
};

exports.ScanSG = async (req, res) => {
  const params = {
    // Filters: [],
  };

  try {
    const data = await client.send(new DescribeSecurityGroupsCommand(params));
    return res.json({ data, isSuccess: true }).status(200);
  } catch (err) {
    return res.json({ error: err, isSuccess: false, path: req.url });
  }
};
