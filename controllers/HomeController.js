const Controller = require("./Controller");
const { routeNames } = require("../routes/paths");

class HomeController extends Controller {
  index(request, response) {
    const viewData = {};
    viewData.title = "Pokeneas";
    viewData.jsonPath = routeNames.pokeneaJson;
    viewData.imagePath = routeNames.pokeneaImage;

    this.view(response, "home/index", viewData);
  }
}

module.exports = HomeController;
