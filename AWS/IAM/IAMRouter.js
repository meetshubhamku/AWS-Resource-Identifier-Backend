const express = require("express");
const { listIamUsers, listIamRoles } = require("./IAMController");
const IAMRouter = express.Router();

IAMRouter.get("/iam/users", listIamUsers);
IAMRouter.get("/iam/roles", listIamRoles);

module.exports = IAMRouter;
