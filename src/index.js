const express = require("express");

const app = express();
app.use(express.json());
app.post("/ship", (req, res) => {
  var categoryName = req.body.categoryName;
  var postalCode = req.body.postalCode;
  var shipperID = req.body.shipperID;

  if (!categoryName) {
    res.statusCode = 400;
    res.json({ message: "Missing parameter categoryName." });
    return;
  }

  if (!postalCode) {
    res.statusCode = 400;
    res.json({ message: "Missing parameter postalCode." });
    return;
  }

  if (!shipperID) {
    res.statusCode = 400;
    res.json({ message: "Missing parameter shipperID." });
    return;
  }

  var days = Math.random() * (20 - 1) + 1;

  var shippingDate = new Date();
  shippingDate.setDate(shippingDate.getDate() + days);
  shippingDate = shippingDate
    .toISOString()
    .replace(/T/, " ")
    .replace(/\..+/, "")
    .substring(0, 10);

  res.json({ shipperID, categoryName, postalCode, shippingDate });
});

app.get("/", (req, res) => {
  res.send("Welcome to Shipping API");
});

app.listen(8080);
