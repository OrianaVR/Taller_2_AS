const express = require("express");
const { routeNames } = require("./paths");

function createPokeneaRouter(pokeneaController) {
  const router = express.Router();

  router.get(routeNames.pokeneaJson, pokeneaController.showJson.bind(pokeneaController));
  router.get(routeNames.pokeneaImage, pokeneaController.showImage.bind(pokeneaController));

  return router;
}

module.exports = createPokeneaRouter;
