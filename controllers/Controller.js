class Controller {
  view(response, viewName, viewData) {
    response.render(viewName, viewData);
  }
}

module.exports = Controller;
