const React = require('react')
class Show extends React.Component {
  render () {
    const pokemon = this.props.pokemons;

     return (
       <div>
       <h1> Colors Page </h1>
         The {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}  <br></br> 
         <img src={pokemon.img + '.jpg'} /> <br></br>
         <br></br>
         <a href={`/pokemon`}> *** Go Back *** </a> <br></br>
         <a href={`/`}> *** Home *** </a>
       </div>
       );
      }
 }
 module.exports  = Show;