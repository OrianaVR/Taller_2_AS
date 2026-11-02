const { routeNames } = require("../routes/paths");

class HomeController {
  index(request, response) {
    const viewData = {};
    viewData.title = "Pokeneas";
    viewData.jsonPath = routeNames.pokeneaJson;
    viewData.imagePath = routeNames.pokeneaImage;

    response.render("home/index", { viewData });
  }
}

module.exports = HomeController;
