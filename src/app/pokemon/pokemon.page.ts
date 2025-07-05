import { PokeapiService } from './../apis/pokeapi/pokeapi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  pokemonId: string;
  pokemon: any = { types: [], stats: [] }; 

  typeColors: { [key: string]: string } = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C', 
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    steel: '#B7B7CE',
    fairy: '#D685AD',
    dark: '#705746',
  };

  constructor(private activatedRoute: ActivatedRoute,
              private pokeapiService: PokeapiService,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.pokemonId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadPokemonDetails();
  }

  loadPokemonDetails() {
    this.pokeapiService.getPokemon(this.pokemonId).then((pokemon: any) => {
      this.pokemon = pokemon;
      console.log('Dados do Pokémon carregados:', this.pokemon); 
    }).catch(error => {
      console.error('Erro ao carregar detalhes do Pokémon:', error);
    });
  }

  getTypeColor(typeName: string): string {
    const lowerTypeName = typeName.toLowerCase(); 
    const color = this.typeColors[lowerTypeName];
    console.log(`Debug Color: Tipo '${typeName}' -> Cor '${color}'`); 
    return color || '#888888'; 
  }

  capturar() {
    console.log(`Tentando capturar ${this.pokemon.name}...`);
    this.navCtrl.navigateForward('pokebola', { queryParams: { pokemonId: this.pokemonId } });
  }
}