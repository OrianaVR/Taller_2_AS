const express = require("express");
const { routeNames } = require("./paths");

function createHomeRouter(homeController) {
  const router = express.Router();

  router.get(routeNames.home, homeController.index.bind(homeController));

  return router;
}

module.exports = createHomeRouter;
