const express = require("express");
const path = require("path");

const port = process.env.PORT || 3000;
var app = express();

publicPath = path.join(__dirname, "/dist");

// Static folders
app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
