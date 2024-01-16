import React from "react";

export default function EnemyPokemon({ encounter }) {

    /*
      <h2>The enemy pokemon is:</h2>
      <h3>{foundPokemon.name.charAt(0).toUpperCase() + foundPokemon.name.slice(1).toLowerCase()}</h3>
      <img src={foundPokemon.front_default} alt="" />
      */

    return (
        <div>
            <h2>The enemy pokemon is:</h2>
            <h3>{encounter.name.charAt(0).toUpperCase() + encounter.name.slice(1).toLowerCase()}</h3>
            <img src={encounter.front_default} alt="" />
            <p>
                HP: {encounter.hp}<br></br>
                ATK: {encounter.attack}<br></br>
                DEF: {encounter.deffense}<br></br>
            </p>
        </div>
    )
}