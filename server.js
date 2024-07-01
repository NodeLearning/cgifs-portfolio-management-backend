const app = require("./app");
const config = require("./config/config");

const PORT = config.development.port || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
