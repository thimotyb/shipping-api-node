const express = require("express");

const app = express();
app.use(express.json());
app.post("/ship", (req, res) => {
  var categoryName = req.body.categoryName;
  var postalCode = req.body.postalCode;

  if (!categoryName || !postalCode) {
    res.statusCode = 400;
    res.json({ message: "Missing parameters." });
    return;
  }

  res.send("you want to ship " + categoryName + " to " + postalCode);
});

app.get("/", (req, res) => {
  res.send("Welcome to Shipping API");
});

app.listen(8080);
