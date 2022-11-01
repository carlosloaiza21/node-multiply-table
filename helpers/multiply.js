const colors = require("colors");
const fs = require("fs");
let data = "";
let outputConsole = "";
const multiply = async (number = 5, toList = false, to = 10) => {
  try {
    for (let i = 1; i <= to; i++) {
      outputConsole += `${colors.red(number)} ${colors.green(
        "X"
      )} ${colors.bgGreen.black(i)} = ${colors.bgMagenta(number * i)}\n`;

      data += `${number} X ${i} = ${number * i}\n`;
    }

    if (toList) {
      console.log(outputConsole);
    }

    fs.writeFileSync(`output/tabla-${number}.txt`, data);

    return "Created Table";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  multiply,
};
