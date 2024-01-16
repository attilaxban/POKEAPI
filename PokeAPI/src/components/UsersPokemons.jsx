import React, { useState, useEffect } from 'react';

export default function UsersPokemons(props){
    
  const pickedPokemon = props.pickedPokemon
  const setPickedPokemon = props.setPickedPokemon;

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
            img: pokemonData.sprites.front_default,
            hp: pokemonData.stats[0].base_stat,
            attack: pokemonData.stats[1].base_stat,
            deffense: pokemonData.stats[2].base_stat
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

  const handleChoose = async (event) => {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${event.target.id.toLowerCase()}`);
    const data = await response.json();
    setPickedPokemon({
      name: data.name,
      img: data.sprites.front_default,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      deffense: data.stats[2].base_stat
    })
  }
  return (
    pickedPokemon === "" ? (
      <div>
        <h2>Pick a pokemon:</h2>
        {usersPokemonsName.map((pokemon, index) => (
          <div id={pokemon.name} key={index}>
            <h2 id="user-pokemon">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}</h2>
            <img src={pokemon.img} alt={pokemon.name} />
            <p>
              HP: {pokemon.hp}<br></br>
              ATK: {pokemon.attack}<br></br>
              DEF: {pokemon.deffense}<br></br>
            </p>
            <button id={pokemon.name} onClick={handleChoose}>Pick {pokemon.name}</button>
          </div>
        ))}
      </div>
    ) : (
      <div id='choosen-pokemon'>
        <h2>Your choice:</h2>
        <h3>{pickedPokemon.name.charAt(0).toUpperCase() + pickedPokemon.name.slice(1).toLowerCase()}</h3>
        <img src={pickedPokemon.img} alt="" />
        <p>
          HP: {pickedPokemon.hp}<br></br>
          ATK: {pickedPokemon.attack}<br></br>
          DEF: {pickedPokemon.deffense}<br></br>
        </p>
      </div>
    )
  )

}