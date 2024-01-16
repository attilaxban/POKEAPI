export default function FoundPokemon(props){
    
    const setPage = props.setPage;
    const foundPokemon = props.foundPokemon;

    const handleFight = () => {
        setPage("usersPokemons");
    };
    
    return(
        <div className="pokemon-details">
            <li>{foundPokemon.name}</li>
            <img src={foundPokemon.front_default} alt="" />
            <button onClick={handleFight}>Fight</button>
        </div>
    )
}