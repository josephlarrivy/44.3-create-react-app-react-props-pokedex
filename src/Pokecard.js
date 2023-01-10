import pokeData from "./pokeData";


const Pokecard = (props) => {
    let imageLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    return (
        <div class="card">
            <h1>{props.name}</h1>
            <img src={`${imageLink}`}></img>
            <br></br>
            <p>Type: {props.type}</p>
            <p>EXP: {props.base_experience}</p>
        </div>
    )



}

export default Pokecard;
