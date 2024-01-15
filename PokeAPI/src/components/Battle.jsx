import React from "react";

export default function Battle({pokemon, front_default}){

    return (
        <div>
            <h1>Your pokemons:</h1>
            <ul>
                <li>{pokemon}</li>
                <img src={front_default} alt="" />
            </ul>
        </div>
    )
}