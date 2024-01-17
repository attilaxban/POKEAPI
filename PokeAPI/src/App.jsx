
import React, { useState, useEffect } from 'react';
import Locations from './components/Locations';
import './App.css';
import Battle from './components/Battle';
import UsersPokemons from './components/UsersPokemons';
import NoFoundPokemon from './components/NoFoundPokemon';
import FoundPokemon from './components/FoundPokemon';


function App() {
  
  const [page, setPage] = useState('locations');
  const [foundPokemon, setFoundPokemon] = useState("");
  const [pickedPokemon, setPickedPokemon] = useState("");

  const locationURL = 'https://pokeapi.co/api/v2/location';
    const [locations, setLocations] = useState([]);

    useEffect(() => {
      console.log("useEff");
      const fetchData = async () => {
          try {
            const response = await fetch(locationURL);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log(data.results.slice(0, 20));
            setLocations(data.results.slice(0, 20));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
    }, []);
   
  return page === "locations" ? (
    <div>
      <Locations setPage={setPage} setFoundPokemon={setFoundPokemon} locations={locations} setLocations={setLocations}/>
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
      <UsersPokemons setPickedPokemon={setPickedPokemon} setPage={setPage}/>
    </div>
    
  ) : page === "battle" ? (
      <div>
        <Battle pickedPokemon={pickedPokemon} setPickedPokemon={setPickedPokemon}
        foundPokemon={foundPokemon} setFoundPokemon={setFoundPokemon}
        setPage={setPage}/>
      </div>
      
  ) : (
    <div>

    </div>
  )

}

export default App;
