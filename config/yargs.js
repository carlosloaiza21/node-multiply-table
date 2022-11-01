const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "is the table number",
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    demandOption: false,
    default: false,
    describe: "show the table on console",
  })
  .option("t", {
    alias: "To",
    type: "number",
    demandOption: false,
    default: 10,
    describe: "limit",
  })
  .check((argv, option) => {
    if (isNaN(argv.b) || isNaN(argv.t)) {
      throw "the base and the limit needs to be numeric";
    } else {
      return true;
    }
  }).argv;

module.exports = argv;
