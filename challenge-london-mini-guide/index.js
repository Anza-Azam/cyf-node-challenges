const express = require("express");
const app = express();
const harrow = require("./data/Harrow.json");
const heathrow = require("./data/Heathrow.json");
const stratford = require("./data/Stratford.json");
const cities = { harrow: harrow, heathrow: heathrow, stratford: stratford };

const { harrowcity, heathrowcity, stratfordcity } = cities;

app.get("/", (req, res) => {
  res.send(
    "Welcome to city Mini guide  /city --- /city/category /city/category/search?term=name"
  );
});

app.get("/:city/:category/search", (req,
  res) => {
  const city = req.params.city;
  const category = req.params.category;
  const term = req.query.term;
  let data = cities[city][category].filter((category) =>
    category["name"].toLowerCase().includes(term.toLowerCase())
  );
  res.status(200).json(data);
});

app.get("/:city", (req, res) => {
  const city = req.params.city;
  res.status(200).json(cities[city]);
});

app.get("/:city/:category", (req, res) => {
  const city = req.params.city;
  const category = req.params.category;

  res.status(200).json(cities[city][category]);
});

app.listen(3000);
