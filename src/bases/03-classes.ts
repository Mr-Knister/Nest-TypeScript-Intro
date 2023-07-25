import axios from 'axios';
import { Move, PokeApiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {
    // public id: number;
    // public name: string;
    // constructor(id:number, name:string) {
    //     this.id = id;
    //     this.name = name;
    //     console.log('constructor llamado');
    // }
    // constructor(public id:number, public name:string) {
    //     console.log('constructor llamado');
    // }
    get imageUrl():string {
        return `https://pokemon.com/${this.id}.jpg`;
    }
    constructor(public readonly id:number, public name:string) {
        console.log('constructor llamado');
    }
    scream() {
        console.log(`${this.name.toUpperCase()}!!!`)
    }
    speak() {
        console.log(`${this.name}, ${this.name}`)
    }
    async getMoves():Promise<Move[]> {
        // const moves = 10;
        const { data } = await axios.get<PokeApiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves[0].move.name);
        return data.moves;
    }
}

export const charmander = new Pokemon(4, 'Charmander');
// charmander.id = 4;
// charmander.name = "Mew";
// console.log(charmander);
// charmander.scream();
// charmander.speak();
charmander.getMoves();