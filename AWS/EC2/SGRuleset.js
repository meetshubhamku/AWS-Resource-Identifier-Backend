const DangerRuleset = {
  mysql: [
    {
      Name: "ip-permission.from-port",
      Values: ["3306"],
    },
    {
      Name: "ip-permission.cidr",
      Values: ["0.0.0.0/0"],
    },
  ],
  ssh: [
    {
      Name: "ip-permission.from-port",
      Values: ["22"],
    },
    {
      Name: "ip-permission.cidr",
      Values: ["0.0.0.0/0"],
    },
  ],
};

module.exports = DangerRuleset;
