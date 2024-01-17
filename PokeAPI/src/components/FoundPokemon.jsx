export default function FoundPokemon(props){
    
    const setPage = props.setPage;
    const foundPokemon = props.foundPokemon;

    const handleFight = () => {
        setPage("usersPokemons");
    };
    
    return(
        <div className="encounter-details">
            <h3>{foundPokemon.name.toUpperCase()}</h3>
            <img src={foundPokemon.img} alt="" />
            <p>
                HP:{foundPokemon.hp}<br></br>
                ATK:{foundPokemon.attack}<br></br>
                DEF:{foundPokemon.deffense}<br></br>
            </p>
            <button onClick={handleFight}>Pick a pokemon</button>
        </div>
    )
}