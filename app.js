const express = require("express");
const cors = require("cors");
const postRoute = require("./routes/postRoute");

const app = express();

app.use(cors());
app.use(express.json());
app.use(postRoute);

app.get("/", (req, res) => {
  console.log("Hello");
  return res.status(200).send("Hello");
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`The app is running at ${PORT}`);
});
