
import React, { useState, useEffect } from 'react';
import Locations from './components/Locations';
import './App.css';
import Battle from './components/Battle';
import UsersPokemons from './components/UsersPokemons';
import NoFoundPokemon from './components/NoFoundPokemon';
import FoundPokemon from './components/FoundPokemon';

function App() {
  
  const [page, setPage] = useState('locations')
  const [foundPokemon, setFoundPokemon] = useState({
    name: '',
    front_default: ''
  });
   
  return page === "locations" ? (
    <div>
      <Locations setPage={setPage} setFoundPokemon={setFoundPokemon}/>
    </div>
    
  ) : page === "noFoundPokemon" ? (
    <div>
      <NoFoundPokemon/>
    </div>
    
  ) : page === "foundPokemon" ? (
    <div>
      <FoundPokemon setPage={setPage} foundPokemon={foundPokemon}/>
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
