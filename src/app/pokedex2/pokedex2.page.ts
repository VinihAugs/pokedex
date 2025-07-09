import { PokeapiService } from '../apis/pokeapi/pokeapi.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex2',
  templateUrl: './pokedex2.page.html',
  styleUrls: ['./pokedex2.page.scss'],
})
export class Pokedex2Page implements OnInit {

  pokedex: any = [];
  query: string;

  constructor(public pokeapiService: PokeapiService, public router: Router) {
    this.search();
  }

  search() {
    this.pokeapiService.getPokemonsByGeneration('generation-ii').subscribe((result: any) => {
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
