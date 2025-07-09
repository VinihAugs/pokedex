import { PokeapiService } from '../apis/pokeapi/pokeapi.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex3',
  templateUrl: './pokedex3.page.html',
  styleUrls: ['./pokedex3.page.scss'],
})
export class Pokedex3Page implements OnInit {

  pokedex: any = [];
  query: string;

  constructor(public pokeapiService: PokeapiService, public router: Router) {
    this.search();
  }

  search() {
    this.pokeapiService.getPokemonsByGeneration('generation-iii').subscribe((result: any) => {
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
