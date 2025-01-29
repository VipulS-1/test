const app = require("./app");
const http = require("http");
// added this bcoz we've added "start:server" : "nodemon server.js" in pkg.json
// We can also use npm run start:server besides nodemon server

const normalizePort = (val) => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe" + addr : "port" + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {};

const port = normalizePort(process.env.PORT || 3000);
app.set("port", port);

const server = http.createServer(app);

server.on("error", onError);
server.on("listening", onListening);
server.listen(port); // server.listen(process.env.PortNumber) in case of prod
console.log("Server is listening at " + port);
