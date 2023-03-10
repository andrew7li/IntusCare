const express = require("express");
const cors = require("cors");
const { participants } = require("./data");

const app = express();

// Enable CORS so that the React app can make requests to the API
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  })
);

app.get("/participants", (_, res) => {
  res.json(participants);
});

app.get("/participants/:id", (req, res) => {
  const { id } = req.params;
  const participant = participants.find((p) => {
    return p.firstName + p.lastName === id;
  });
  res.json(participant);
});

module.exports = { app };
