const path = require("path");
const express = require("express");
const PokeneaService = require("./services/PokeneaService");
const ContainerService = require("./services/ContainerService");
const PokeneaController = require("./controllers/PokeneaController");
const HomeController = require("./controllers/HomeController");
const createWebRouter = require("./routes/web");
const { basePath } = require("./routes/paths");

function createApp() {
  const app = express();

  app.set("view engine", "pug");
  app.set("views", path.join(__dirname, "views"));
  app.use(express.static(path.join(__dirname, "public")));

  const pokeneaService = new PokeneaService();
  const containerService = new ContainerService();
  const pokeneaController = new PokeneaController(pokeneaService, containerService);
  const homeController = new HomeController();

  app.use(basePath, createWebRouter(homeController, pokeneaController));

  return app;
}

module.exports = createApp;
