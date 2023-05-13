
// const myStyle = {
//     color: '#ffffff',
//     backgroundColor: 'lightgrey',
//     };
    
const React = require('react');

class Index extends React.Component {
  render() {
      const { pokemons } = this.props;
      return (
              <div >
                  <h1>Gotta Catch 'Em All</h1>
                  <ul>
                      {pokemons.map((pokemon, i) => {
                          return (
                              <li>
                                  The{' '}
                                  <a href={`/pokemon/${pokemon.id}`}>
                                      {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                  </a>
                              </li>
                          );
                      })}
                  </ul>
                  <nav>
                  <a href={`/`}> *** Home *** </a>
</nav>
              </div>
      );
  }
}
module.exports = Index;