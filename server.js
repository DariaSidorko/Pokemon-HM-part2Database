
const express = require('express');
const app = express();

//const pokemons = require('./models/data');

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

require('dotenv').config() 

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

const Pokemon = require('./models/pokemon')


app.get('/pokemon', (req, res)=>{
  Pokemon.find({}, (error, allPokemons)=>{
    console.log(error)
      res.render('Index', {
          pokemons: allPokemons
      });

  });
});

// app.get('/pokemon', (req, res) => {
//   res.render('Index', { pokemons: pokemons });
// });

app.post('/pokemon', (req, res) => {
    Pokemon.create(req.body, (error, createdPokemon)=>{
      //res.send(createdPokemon);
      res.redirect('/');
    });
    
});

// GET put this above your Show route
app.get('/pokemon/new', (req, res) => {
  res.render('New');
});


app.get('/', (req, res) => {
  res.send(
    `<div>
    <div>Welcome to the Pokemon App!</div>
    <a href="/pokemon"> Learn more about Pokemons</a>
    </div>`);
});



app.get('/pokemon/:id', (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon)=>{
  res.render('Show', { 
    pokemons: foundPokemon,
    // index: req.params.indexOfColorsArray
});
});
});





app.listen(3000, () => {
  console.log('listening');
});