const express = require("express");

const app = express();

const port = 3001;

app.get("/", (req, res) => {
    res.send("Welcome to my favourite movie list");
  });

app.get("/api/movies", (req, res) => {
    res.status(200).json(movies);
  });

  
  
  
  app.get("/api/movies/:id", (req, res) => {
    res.send(` ${req.params.id}`);
  });
  app.get("/users/:id", );











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

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});