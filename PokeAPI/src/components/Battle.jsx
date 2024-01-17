import React, { useState } from "react";

export default function Battle(props){

    const [battlePage, setBattlePage] = useState("battle")

    const pickedPokemon = props.pickedPokemon;
    const setPickedPokemon = props.setPickedPokemon;
    const foundPokemon = props.foundPokemon;
    const setFoundPokemon = props.setFoundPokemon;
    const setPage = props.setPage;

    const battlePoke = (event)=>{
        event.preventDefault();
        
        let damage;
        let randomNum;

        randomNum = Math.floor(Math.random()*(255-217+1))+217;
        damage = ((((2/5+2)*pickedPokemon.attack*60/foundPokemon.deffense)/50)+2)*randomNum/255;
        const newHPfoundPokemon = Math.max(foundPokemon.hp-damage, 0);
        console.log(newHPfoundPokemon);
        const newFoundPokemon = {...foundPokemon, hp:newHPfoundPokemon}
        setFoundPokemon(newFoundPokemon);

        if (newHPfoundPokemon === 0){
            console.log("win");
            setBattlePage("win");
        }

        randomNum = Math.floor(Math.random()*(255-217+1))+217;
        damage = ((((2/5+2)*foundPokemon.attack*60/pickedPokemon.deffense)/50)+2)*randomNum/255;
        const newHPpickedPokemon = Math.max(pickedPokemon.hp-damage, 0);
        console.log(newHPpickedPokemon);
        const newPickedPokemon = {...pickedPokemon, hp:newHPpickedPokemon}
        setPickedPokemon(newPickedPokemon);

        if (newHPpickedPokemon === 0){
            console.log("defeat");
            setBattlePage("defeat")
        }
    }

    const nextLoc = (event)=>{
        event.preventDefault();

        setPage("locations");
    }

    return battlePage === "battle" ? (
        <div id='pokemon-summary'>
            <div>
                <h2>Your HP:{parseInt(pickedPokemon.hp*100)/100}</h2>
                <h2>Enemy's HP:{parseInt(foundPokemon.hp*100)/100}</h2><br/>
            </div>

            <div id='choosen-pokemon'>
                <h2>Your choice:</h2>
                <h3>{pickedPokemon.name.charAt(0).toUpperCase() + pickedPokemon.name.slice(1).toLowerCase()}</h3>
                <img src={pickedPokemon.img} alt="" />
                <p>
                HP: {parseInt(pickedPokemon.hp*100)/100}<br></br>
                ATK: {pickedPokemon.attack}<br></br>
                DEF: {pickedPokemon.deffense}<br></br>
                </p>
            </div>

            <div>
                <h2>The enemy pokemon is:</h2>
                <h3>{foundPokemon.name.charAt(0).toUpperCase() + foundPokemon.name.slice(1).toLowerCase()}</h3>
                <img src={foundPokemon.front_default} alt="" />
                <p>
                    HP: {parseInt(foundPokemon.hp*100)/100}<br></br>
                    ATK: {foundPokemon.attack}<br></br>
                    DEF: {foundPokemon.deffense}<br></br>
                </p>
            </div>

            <button onClick={battlePoke}>Fight</button>
      </div>
    ) : battlePage === "win" ? (
        <div>
            <h2>You've won!</h2>
            <p>The enemy pokémon is captured:</p>

            <h3>{foundPokemon.name.charAt(0).toUpperCase() + foundPokemon.name.slice(1).toLowerCase()}</h3>
                <img src={foundPokemon.front_default} alt="" />
                <p>
                    HP: {parseInt(foundPokemon.hp*100)/100}<br></br>
                    ATK: {foundPokemon.attack}<br></br>
                    DEF: {foundPokemon.deffense}<br></br>
                </p>
            
            <button onClick={nextLoc}>Next location</button>

        </div>
    ) : battlePage === "defeat" ? (
        <div>
            <h2>You've lost!</h2>
            <p>Go to the next location.</p>
            <button onClick={nextLoc}>Next location</button>
        </div>
    ) : (
        <div>

        </div>
    )

}