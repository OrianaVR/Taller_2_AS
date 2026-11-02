const createApp = require("./app");
const os = require("os") 
const port = 80;
const app = createApp();

app.listen(port, () => {
  console.log(`Pokeneas listening on port ${port}`);
});
