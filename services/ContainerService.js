const os = require("os");

class ContainerService {
  getContainerId() {
    return os.hostname();
  }
}

module.exports = ContainerService;
