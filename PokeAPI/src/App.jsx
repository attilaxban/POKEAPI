/* eslint-disable react/no-unknown-property */
import { useState} from 'react'
import { useEffect } from 'react'
import DisplayLocations from './components/Locations'

import './App.css'

const locationURL = 'https://pokeapi.co/api/v2/location';
const pokemonURL = `https://pokeapi.co/api/v2/pokemon-form/${Math.floor(Math.random() * 20)}/`



function App() {

  const [location, setLocation] = useState([]);
  const [foundPokemon, setFoundPokemon] = useState({
    name: "",
    front_default: ""
  });
  const [click,setClick] = useState(false);


 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/location');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setLocation(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = async () =>{

    await fetch(`https://pokeapi.co/api/v2/pokemon-form/${Math.floor(Math.random() * 20)}/`) //https://pokeapi.co/api/v2/pokemon-form/3/
      .then(resp => resp.json())
      .then (data =>{
        console.log(data);
        foundPokemon.name = data.name;
        foundPokemon.front_default = data.sprites.front_default
        console.log(foundPokemon);
        setClick(true)
      })
  
  }

  const pokemonLocations = location.results ? location.results.map(x => x.name) : [];

  return (
   !click ? 
  ( <ul>
   { pokemonLocations.map((loc,index) =>(
      <DisplayLocations
      key={index}
      pokeID={loc}
      location={loc}
      onClick={handleClick}/>
    ))}
    </ul>) : 
    (<ul>
      <li>{foundPokemon.name}</li>
      <img src={foundPokemon.front_default} alt="" />
      <button>Back</button>
    </ul>)


  )

}

export default App
