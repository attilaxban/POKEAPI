import React from "react";

export default function Battle(props){

    const pickedPokemon = props.pickedPokemon;
    const foundPokemon = props.foundPokemon;

    return (
        <div id='pokemon-summary'>
            
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


            <div>
                <h2>The enemy pokemon is:</h2>
                <h3>{foundPokemon.name.charAt(0).toUpperCase() + foundPokemon.name.slice(1).toLowerCase()}</h3>
                <img src={foundPokemon.front_default} alt="" />
                <p>
                    HP: {foundPokemon.hp}<br></br>
                    ATK: {foundPokemon.attack}<br></br>
                    DEF: {foundPokemon.deffense}<br></br>
                </p>
            </div>

            <button>Fight</button>
      </div>
    )
}