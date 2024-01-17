import React, { useState, useEffect } from "react";
import './Battle.css';

export default function Battle(props) {
  

    const pickedPokemon = props.pickedPokemon;
    const foundPokemon = props.foundPokemon;
    const setPage = props.setPage;
    const usersPokemonsName = props.usersPokemonsName;
    const setUsersPokemonsName = props.setUsersPokemonsName;

    const [battlePage, setBattlePage] = useState("battle");
    const [HPUser, setHPuser] = useState(pickedPokemon.hp);
    const [HPEnemy, setHPEnemy] = useState(foundPokemon.hp);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 32) { 
                battlePoke(event);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [battlePage, HPUser, HPEnemy]); 

    const battlePoke = (event) => {
        event.preventDefault();

        let damage;
        let randomNum;
       
        randomNum = Math.floor(Math.random() * (255 - 217 + 1)) + 217;
        damage = ((((2 / 5 + 2) * pickedPokemon.attack * 60 / foundPokemon.deffense) / 50) + 2) * randomNum / 255;
        
        setHPEnemy(Math.max(HPEnemy - damage, 0));

        if (Math.max(HPEnemy - damage, 0) === 0) {
            console.log("win");
            setBattlePage("win");
            setUsersPokemonsName([...usersPokemonsName, foundPokemon])
        }

        randomNum = Math.floor(Math.random() * (255 - 217 + 1)) + 217;
        damage = ((((2 / 5 + 2) * foundPokemon.attack * 60 / pickedPokemon.deffense) / 50) + 2) * randomNum / 255;
        
        setHPuser(Math.max(HPUser - damage, 0));

        if (Math.max(HPUser - damage, 0) === 0) {
            console.log("defeat");
            setBattlePage("defeat")
        }
    }

    const nextLoc = (event) => {
        event.preventDefault();

        setPage("locations");
    }


    return battlePage === "battle" ? (
        <div id='pokemon-summary'>


            <div id='choosen-pokemon'>
                <h2>Your choice:</h2>
                <h3>{pickedPokemon.name.charAt(0).toUpperCase() + pickedPokemon.name.slice(1).toLowerCase()}</h3>
                <img src={pickedPokemon.img} alt="" />
                <p>
                    HP: {parseInt(HPUser * 100) / 100}<br></br>
                    ATK: {pickedPokemon.attack}<br></br>
                    DEF: {pickedPokemon.deffense}<br></br>
                </p>
            </div>
            <div id="fight-button">
                <div id="fight-stats">
                    <h2>Your HP:{parseInt(HPUser * 100) / 100}</h2>
                    <h2>Enemy's HP:{parseInt(HPEnemy * 100) / 100}</h2><br />
                </div>

                <div onClick>Press Space</div>
            </div><div id="encounter">
                <h2>The enemy pokemon is:</h2>
                <h3>{foundPokemon.name.charAt(0).toUpperCase() + foundPokemon.name.slice(1).toLowerCase()}</h3>
                <img src={foundPokemon.img} alt="" />
                <p>
                    HP: {parseInt(HPEnemy * 100) / 100}<br></br>
                    ATK: {foundPokemon.attack}<br></br>
                    DEF: {foundPokemon.deffense}<br></br>
                </p>
            </div>


        </div>
    ) : battlePage === "win" ? (
        <div>
            <h2>You've won!</h2>
            <p>You own {foundPokemon.name.charAt(0).toUpperCase() + foundPokemon.name.slice(1).toLowerCase()}</p>
            <div id="encounter">
                <h3>{foundPokemon.name.charAt(0).toUpperCase() + foundPokemon.name.slice(1).toLowerCase()}</h3>
                <img src={foundPokemon.img} alt="" />
                <p>
                    HP: {parseInt(foundPokemon.hp * 100) / 100}<br></br>
                    ATK: {foundPokemon.attack}<br></br>
                    DEF: {foundPokemon.deffense}<br></br>
                </p>
                <button onClick={nextLoc}>Next location</button>
            </div>


        </div>
    ) : battlePage === "defeat" ? (
        <div>
            <h2>You've lost!</h2>
            <p>Go to the next location.</p>
            <button id="lost-button" onClick={nextLoc}>Next location</button>
        </div>
    ) : (
        <div>

        </div>
    )

}