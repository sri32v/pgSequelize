const express = require("express");
const morgan = require("morgan");
const healthCheckRouter = require("./routes/healthcheck");

// const db = require("./db");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      // title: "ESP Middleware API",
      customCss: ".swagger-ui .topbar { display: none }",
      customSiteTitle: "ESP Middleware API",
      description: "ESP middleware API Information",
      contact: {
        name: "ESP Developer",
      },
      servers: ["http://localhost:3000"],
    },
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.get("/healthChck", healthCheckRouter);

app.listen(PORT, () => console.log(`Server up at http://localhost:${PORT}`));
