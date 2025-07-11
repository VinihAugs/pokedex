import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'pokedex',
    loadChildren: () => import('./pokedex/pokedex.module').then( m => m.PokedexPageModule)
  },
  {
    path: 'pokemon/:id',
    loadChildren: () => import('./pokemon/pokemon.module').then( m => m.PokemonPageModule)
  },
  {
    path: 'pokebola',
    loadChildren: () => import('./pokebola/pokebola.module').then( m => m.PokebolaPageModule)
  },
  {
    path: 'pokedex2',
    loadChildren: () => import('./pokedex2/pokedex2.module').then( m => m.Pokedex2PageModule)
  },
  {
    path: 'pokedex3',
    loadChildren: () => import('./pokedex3/pokedex3.module').then( m => m.Pokedex3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
