const net = require("net");
// establishes a connection with the game server

const connect = function() {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: "50541"
  });
  console.log(conn)

  conn.on("data", (data) => {
    console.log("server says:", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: PIA");
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: PIA");
    //setTimeout(() => {conn.write("Move: up")}, 200);
    //setTimeout(() => { conn.write("Move: down")}, 300);
    //setTimeout(() => {conn.write("Move: left")}, 400);
    //setTimeout(() => {conn.write("Move: right")}, 500);
        
    //setInterval(() => {conn.write("Move: up")}, 200);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};





module.exports = {connect};