const {
  IAMClient,
  ListUsersCommand,
  ListRolesCommand,
} = require("@aws-sdk/client-iam");
const credentials = require("../../Credentials");
const client = new IAMClient(credentials);

exports.listIamUsers = async (req, res) => {
  const params = {};
  try {
    const data = await client.send(new ListUsersCommand(params));
    return res.json({ data, isSuccess: true }).status(200);
  } catch (err) {
    return res.json({ error: err, isSuccess: false, path: req.url });
  }
};

exports.listIamRoles = async (req, res) => {
  const params = {};
  try {
    const data = await client.send(new ListRolesCommand(params));
    return res.json({ data, isSuccess: true }).status(200);
  } catch (err) {
    return res.json({ error: err, isSuccess: false, path: req.url });
  }
};
