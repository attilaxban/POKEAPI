export default function FoundPokemon(props){
    
    const setPage = props.setPage;
    const foundPokemon = props.foundPokemon;

    const handleFight = () => {
        setPage("usersPokemons");
    };
    
    return(
        <div className="pokemon-details">
            <h3>{foundPokemon.name.charAt(0).toUpperCase() + foundPokemon.name.slice(1).toLowerCase()}</h3>
            <img src={foundPokemon.front_default} alt="" />
            <p>
                HP:{foundPokemon.hp}<br></br>
                ATK:{foundPokemon.attack}<br></br>
                DEF:{foundPokemon.deffense}<br></br>
            </p>
            <button onClick={handleFight}>Fight</button>
        </div>
    )
}