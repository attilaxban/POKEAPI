/* eslint-disable react/prop-types */
import React from "react";


export default function DisplayPokemons({ location, pokeID, onClick }) {

    return (


        <li onClick={onClick} id={pokeID}>{location}</li>


    )
}