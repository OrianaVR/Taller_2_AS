const { routeNames } = require("../routes/paths");

class PokeneaController {
  #pokeneaService;
  #containerService;

  constructor(pokeneaService, containerService) {
    this.#pokeneaService = pokeneaService;
    this.#containerService = containerService;
  }

  showJson(request, response) {
    const pokenea = this.#pokeneaService.getRandomPokenea();

    response.json({
      id: pokenea.getId(),
      name: pokenea.getName(),
      height: pokenea.getHeight(),
      ability: pokenea.getAbility(),
      containerId: this.#containerService.getContainerId(),
    });
  }

  showImage(request, response) {
    const viewData = {};
    viewData.title = "Pokenea";
    viewData.pokenea = this.#pokeneaService.getRandomPokenea();
    viewData.containerId = this.#containerService.getContainerId();
    viewData.imagePath = routeNames.pokeneaImage;

    response.render("pokenea/image", { viewData });
  }
}

module.exports = PokeneaController;
