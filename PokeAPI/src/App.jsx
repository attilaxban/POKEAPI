/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from 'react';
import Locations from './components/Locations';
import './App.css';
import Battle from './components/Battle';
import UsersPokemons from './components/UsersPokemons';
import NoFoundPokemon from './components/NoFoundPokemon';

function App() {
  
  const [foundPokemon, setFoundPokemon] = useState({
    name: '',
    front_default: ''
  });
  const [page, setPage] = useState('locations')

  const handleFight = async () => {
    setPage("usersPokemons");

  };

  return page === "locations" ? (
    <div>
      <Locations setPage={setPage} setFoundPokemon={setFoundPokemon}/>
    </div>
    
  ) : page === "noFoundPokemon" ? (
    <div>
      <NoFoundPokemon/>
    </div>
    /* <div>
      <h1>This location doesn't seem to have any pokémon</h1>
      <button onClick={() => setPage("locations")}>Back</button>
    </div> */
  ) : page === "foundPokemon" ? (
    <div className="pokemon-details">
      <li>{foundPokemon.name}</li>
      <img src={foundPokemon.front_default} alt="" />
      <button onClick={handleFight}>Fight</button>
    </div>
  ) : page === "usersPokemons" ? (
      <div>
        <UsersPokemons />
        <h2>The enemy pokemon is: {foundPokemon.name} <img src={foundPokemon.front_default} alt="" /></h2>
      </div>
  ) : (
      <div></div>
  )

}

export default App;
