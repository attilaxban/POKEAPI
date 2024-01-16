/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from 'react';
import DisplayLocations from './components/Locations';
import './App.css';
import Battle from './components/Battle';
import UsersPokemons from './components/UsersPokemons';

const locationURL = 'https://pokeapi.co/api/v2/location';

/* const usersPokemon = [
  "https://pokeapi.co/api/v2/pokemon/bulbasaur",
  "https://pokeapi.co/api/v2/pokemon/charizard",
  "https://pokeapi.co/api/v2/pokemon/poliwhirl"
]; */

function App() {
  const [locations, setLocations] = useState([]);
  const [foundPokemon, setFoundPokemon] = useState({
    name: '',
    front_default: ''
  });
  const [click, setClick] = useState(false);
  const [fight, setFight] = useState('');
  /* const [usersPokemonsName, setUsersPokemonsName] = useState([]); */

  useEffect(() => {
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
  }, []);

  const handleClick = async (location) => {
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
  };

  const handleFight = async () => {
    setFight(true);

    /* try {
      const fetchPromises = usersPokemon.map(async (pokemonUrl) => {
        const response = await fetch(pokemonUrl);
        const pokemonData = await response.json();
        setUsersPokemonsName((prevPokemons) => [
          ...prevPokemons,
          {
            name: pokemonData.name,
            img: pokemonData.sprites.front_default
          }
        ]);
      });

      await Promise.all(fetchPromises);
    } catch (error) {
      console.error('Error fetching data:', error);
    } */
  };

  /* const handleChoose = (event) =>{
    console.log("You choose:" + event.target.textContent);
  } */

  return !click ? (
    <ul>
      {locations.map((loc, index) => (
        <DisplayLocations
          key={index}
          pokeID={loc.name}
          location={loc.name}
          onClick={() => handleClick(loc)}
        />
      ))}
    </ul>
  ) : !foundPokemon ? (
    <div>
      <h1>This location doesn't seem to have any pokémon</h1>
      <button onClick={() => setClick(false)}>Back</button>
    </div>
  ) : !fight ? (
    <div className="pokemon-details">
      <li>{foundPokemon.name}</li>
      <img src={foundPokemon.front_default} alt="" />
      <button onClick={handleFight}>Fight</button>
    </div>
  ) : (
    <div>
    {/*<h2>Your pokemons:</h2>
      
       <ul>
        {usersPokemonsName.map((pokemon, index) => (
          <><li onClick={handleChoose} key={index}>{pokemon.name}<img src={pokemon.img} alt="" /></li>
          
          </>
        ))}
      </ul> */}
      <UsersPokemons />

      <h2>The enemy pokemon is: {foundPokemon.name} <img src={foundPokemon.front_default} alt="" /></h2>
      </div>
  );
}

export default App;
