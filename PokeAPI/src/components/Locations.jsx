/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';

export default function Locations(props) {
    
    const setFoundPokemon = props.setFoundPokemon;
    const setPage = props.setPage;

    const locationURL = 'https://pokeapi.co/api/v2/location';
    const [locations, setLocations] = useState([]);

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

    const handleClick = async (event) => {
        console.log(event.target.textContent);
        try {
          const locationResponse = await fetch(`https://pokeapi.co/api/v2/location/${event.target.textContent}/`);
          const locationData = await locationResponse.json();
          console.log(locationData);
    
          const areaResponse = await fetch(locationData.areas[0].url);
          const areaData = await areaResponse.json();
    
          const pokemonResponse = await fetch(areaData.pokemon_encounters[0].pokemon.url);
          const pokemonData = await pokemonResponse.json();

          setFoundPokemon({
            name: pokemonData.name,
            front_default: pokemonData.sprites.front_default,
            hp: pokemonData.stats[0].base_stat,
            attack: pokemonData.stats[1].base_stat,
            deffense: pokemonData.stats[2].base_stat
            });
    
          setPage("foundPokemon");
          setLocations((prevLocations) =>
            prevLocations.filter((loc) => loc !== location)
          );

        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };
    
    return (
        <ul id='locations'>
            {locations.map((loc, index) => (
                <li key={index} onClick={handleClick} id={loc.name}>{loc.name}</li>
            ))}
        </ul>
    )
        
}