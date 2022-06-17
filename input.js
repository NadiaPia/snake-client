const {moveKeys} = require("./constants");
//setup interface to handle user input from stdin

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function(key) {

    if (key === '\u0003') {
      process.exit();
    }

    if (moveKeys[key]) {
      conn.write(moveKeys[key]);
    }    
    
  };

  stdin.on("data", handleUserInput);
  return stdin;

};

module.exports = {setupInput};