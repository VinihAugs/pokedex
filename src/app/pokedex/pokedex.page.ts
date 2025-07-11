import { PokeapiService } from './../apis/pokeapi/pokeapi.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  pokedex: any = [];
  query: string;

  constructor(public pokeapiService: PokeapiService, public router: Router) {
    this.search();
  }

  search() {
    this.pokeapiService.getPokemonsByGeneration('generation-i').subscribe((result: any) => {
      this.pokedex = result.data.species;
    });
  }

  ngOnInit() {}

  seeMore(pokemonId: string) {
    this.router.navigate([`pokemon/${pokemonId}`]);
  }

  getNationalNumber(pokemon: any): number {
    return pokemon.id;
  }
}
