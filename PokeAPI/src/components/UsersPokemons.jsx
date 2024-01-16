import React, { useState, useEffect } from 'react';

export default function UsersPokemons(props){
    
  const [usersPokemonsName, setUsersPokemonsName] = useState([]);

  const usersPokemon = [
    "https://pokeapi.co/api/v2/pokemon/bulbasaur",
    "https://pokeapi.co/api/v2/pokemon/charizard",
    "https://pokeapi.co/api/v2/pokemon/poliwhirl"
  ];

  
  useEffect(() => {
    console.log('useEff');
    const fetchUsersPokemons = async () => {
      try {
        const fetchPromises = usersPokemon.map(async (pokemonUrl) => {
          const response = await fetch(pokemonUrl);
          const pokemonData = await response.json();
          return {
            name: pokemonData.name,
            img: pokemonData.sprites.front_default
          };
        });
  
        const newPokemons = await Promise.all(fetchPromises);
        setUsersPokemonsName(newPokemons);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchUsersPokemons();
  }, []);

  const handleChoose = (event) =>{
    console.log("You chose:" + event.target.textContent);
  }

  return(
    <div>
    <h2>Your pokemons:</h2>
      <ul>
        {usersPokemonsName.map((pokemon, index) => (
          <li onClick={handleChoose} key={index}>{pokemon.name}<img src={pokemon.img} alt="" /></li>
        ))}
      </ul>
    </div>
  )

}