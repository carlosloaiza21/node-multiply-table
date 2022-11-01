const argv = require("./config/yargs");
const { multiply } = require("./helpers/multiply");

multiply(argv.b, argv.l, argv.t)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
