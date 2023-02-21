const http = require("http");
const { app } = require("./app");

// Mac OS uses 5000 for their Airplay on their latest update, so I changed it to 8000
const PORT = 8000;

function startServer() {
  const server = http.createServer(app);
  server.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
}

startServer();
