import Pokecard from "./Pokecard";
import pokeData from "./pokeData";

let arr = [];

pokeData.forEach(function(pokemon) {
    // console.log(pokemon.name)
    arr.push(<Pokecard id={pokemon.id} name={pokemon.name} type={pokemon.type} base_experience={pokemon.base_experience} />)
})

// for (let pokemon in pokeData) {
//     console.log(`test ${pokemon}`)
//     arr.push(<Pokecard id={pokemon.id} name={pokemon.name} type={pokemon.type} base_experience={pokemon.base_experience} />)
// }

// console.log(arr)

const Pokedex = (props) => {

    return(
        <>
            {arr}
        </>
    )
}

export default Pokedex;