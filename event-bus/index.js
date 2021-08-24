const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const events = [];
app.post("/events", (req, res) => {
  const event = req.body;
  events.push(event);
  axios.post("http://localhost:4000/events", event).catch((err) => console.log(err.message));
  axios.post("http://localhost:4001/events", event).catch((err) => console.log(err.message));
  axios.post("http://localhost:4007/events", event).catch((err) => console.log(err.message));
  axios.post("http://localhost:4003/events", event).catch((err) => console.log(err.message));

  res.send({ status: "OK" });
});
app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("server is running on port 4005");
});