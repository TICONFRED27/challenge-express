const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my favourite movie list");
});

app.get("/api/movies", (req, res) => {
  res.status(200).json(movies);
});

const getMovie = (req, res) => {
  const idMovie = parseInt(req.params.id - 1);
  idMovie >= movies.length
    ? res.status(404).send("Not Found")
    : res.status(200).json(movies[idMovie]);
};
app.get("/api/movies/:id", getMovie);

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];
module.exports = app;
