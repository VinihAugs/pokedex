import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(public http: HttpClient, private apollo: Apollo) {}

  /**
   * Busca pokémons de uma geração via GraphQL
   * @param generationName ex: 'generation-i', 'generation-ii', 'generation-iii'
   */
  getPokemonsByGeneration(generationName: string) {
    return this.apollo.query<any>({
      query: gql`
        query getGenPokemons {
          species: pokemon_v2_pokemonspecies(
            where: {pokemon_v2_generation: {name: {_eq: "${generationName}"}}}
            order_by: {id: asc}
          ) {
            name
            id
          }
        }
      `
    });
  }

  // Métodos REST antigos mantidos para compatibilidade
  getPokedex(pokedexId: number = 2) {
    return new Promise((resolve, reject) => {
      this.http.get(`https://pokeapi.co/api/v2/pokedex/${pokedexId}`).subscribe((data: any) => {
        return resolve(data);
      }, (err: any) => {
        return reject(err);
      })
    });
  }

  getPokemon(pokemonId: string) {
    return new Promise((resolve, reject) => {
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).subscribe((data: any) => {
        return resolve(data);
      }, (err: any) => {
        return reject(err);
      })
    });
  }

}
