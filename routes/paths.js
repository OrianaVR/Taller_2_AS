const basePath = "/";
const pokeneaPath = "pokenea";
const imagePath = "image";

const routeNames = {
  home: basePath,
  pokeneaJson: basePath + pokeneaPath,
  pokeneaImage: basePath + pokeneaPath + "/" + imagePath,
};

module.exports = { basePath, routeNames };
