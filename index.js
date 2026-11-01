const createApp = require("./app");

const port = process.env.PORT || 80;
const app = createApp();

app.listen(port, () => {
  console.log(`Pokeneas escuchando en el puerto ${port}`);
});
