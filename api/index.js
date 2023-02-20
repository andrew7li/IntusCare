const http = require("http");
const { app } = require("./app");

// TODO: Change this port back to 5000 upon submission.
// Mac OS uses 5000 for their Airplay on their latest update.
const PORT = 8000;

function startServer() {
  const server = http.createServer(app);
  server.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
}

startServer();
