export const pokemonIdS:number[] = [1,20,30,34,66];
// pokemonIdS.push('1');

interface Pokemon {
    id:number;
    name:string;
    age?:number;
}
export const bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    age: 2,
}
export const charmander:Pokemon = {
    id: 4,
    name: "Charmander",
    age: 1
}

export const pokemons:Pokemon[] = [];
pokemons.push(charmander);
pokemons.push(bulbasaur);

// console.log(pokemons);