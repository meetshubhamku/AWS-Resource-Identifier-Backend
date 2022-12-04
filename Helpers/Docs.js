require("dotenv").config();

exports.swaggerDocumentation = {
  openapi: "3.0.0",
  info: {
    title: "Docs",
    version: "1.0.0",
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}`,
      description: "Development",
    },
    {
      url: `http://production`,
      description: "Production",
    },
  ],
  tags: [
    {
      name: "EC2",
      description: "EC2 Routes",
    },
  ],
  paths: {
    "/api/ec2/list": {
      get: {
        tags: ["EC2"],
        description: "List all ec2's in a specific region",
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  example: {
                    data: {
                      $metadata: {},
                      Reservations: {},
                    },
                    isSuccess: true,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
