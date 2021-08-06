const express = require('express');
const app = express();//app is an object

const pokemon = [
    {
      name: "Bulbasaur",
      img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"
    },
    {
      name: "Ivysaur",
      img: "http://img.pokemondb.net/artwork/ivysaur.jpg"
    },
    {
      name: "Venusaur",
      img: "http://img.pokemondb.net/artwork/venusaur.jpg"
    },
    {
      name: "Charmander",
      img: "http://img.pokemondb.net/artwork/charmander.jpg"
    },
    {
      name: "Charizard",
      img: "http://img.pokemondb.net/artwork/charizard.jpg"
    },
    {
      name: "Squirtle",
      img: "http://img.pokemondb.net/artwork/squirtle.jpg"
    },
    {
      name: "Wartortle",
      img: "http://img.pokemondb.net/artwork/wartortle.jpg"
    }
  ];

//index
app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
      pokemon: pokemon
  })
})

app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs');
})

app.post('/pokemon', (req, res) => {
  pokemon.push(req.body);
  res.redirect('/pokemon');
})

//show
app.get('/pokemon/:index', (req, res) => {
  console.log(req.params.index);
  res.render('show.ejs', {
      character: pokemon[req.params.index]
  })
})

app.delete('/pokemon/:index', (req, res) => {
  pokemon.splice(req.params.index, 1);
  res.redirect('/pokemon');
})

app.get('/pokemon/:index/edit', (req, res) => {
  res.render('edit.ejs', {
      character: pokemon[req.params.index],
      characterIndex: req.params.index
  })
})

app.put('/pokemon/:index', (req, res) => {
  pokemon[req.params.index] = req.body;
  res.redirect('/pokemon');
})

app.listen(3000);
console.log('im listening');