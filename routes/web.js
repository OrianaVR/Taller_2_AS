const express = require("express");
const { routeNames } = require("./paths");

function createWebRouter(homeController, pokeneaController) {
  const router = express.Router();

  router.get(routeNames.home, homeController.index.bind(homeController));
  router.get(routeNames.pokeneaJson, pokeneaController.showJson.bind(pokeneaController));
  router.get(routeNames.pokeneaImage, pokeneaController.showImage.bind(pokeneaController));

  return router;
}

module.exports = createWebRouter;
