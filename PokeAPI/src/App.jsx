/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from 'react';
import Locations from './components/Locations';
import './App.css';
import Battle from './components/Battle';
import UsersPokemons from './components/UsersPokemons';

/* const locationURL = 'https://pokeapi.co/api/v2/location'; */


function App() {
  /* const [locations, setLocations] = useState([]); */
  const [foundPokemon, setFoundPokemon] = useState({
    name: '',
    front_default: ''
  });
  const [page, setPage] = useState('locations')
  /* const [click, setClick] = useState(false);
  const [fight, setFight] = useState(''); */
  
  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(locationURL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setLocations(data.results.slice(0, 20));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); */

/*   const handleClick = async (location) => {
    try {
      const locationResponse = await fetch(`https://pokeapi.co/api/v2/location/${location.name}/`);
      const locationData = await locationResponse.json();

      const areaResponse = await fetch(locationData.areas[0].url);
      const areaData = await areaResponse.json();

      const pokemonResponse = await fetch(areaData.pokemon_encounters[0].pokemon.url);
      const pokemonData = await pokemonResponse.json();

      setFoundPokemon({
        name: pokemonData.name,
        front_default: pokemonData.sprites.front_default
      });

      setClick(true);

      if (foundPokemon) {
        setLocations((prevLocations) =>
          prevLocations.filter((loc) => loc !== location)
        );
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }; */

  const handleFight = async () => {
    setPage("usersPokemons");

  };


  return page === "locations" ? (
    <div>
      <Locations setPage={setPage} setFoundPokemon={setFoundPokemon}/>
    </div>
    /* <ul>
      {locations.map((loc, index) => (
        <DisplayLocations
          key={index}
          pokeID={loc.name}
          location={loc.name}
          onClick={() => handleClick(loc)}
        />
      ))}
    </ul> */
  ) : page === "noFoundPokemon" ? (
    <div>
      <h1>This location doesn't seem to have any pokémon</h1>
      <button onClick={() => setPage("locations")}>Back</button>
    </div>
  ) : page === "foundPokemon" ? (
    <div className="pokemon-details">
      <li>{foundPokemon.name}</li>
      <img src={foundPokemon.front_default} alt="" />
      <button onClick={handleFight}>Fight</button>
    </div>
  ) : (
    <div>
    
      <UsersPokemons />

      <h2>The enemy pokemon is: {foundPokemon.name} <img src={foundPokemon.front_default} alt="" /></h2>
      </div>
  );
}

export default App;
