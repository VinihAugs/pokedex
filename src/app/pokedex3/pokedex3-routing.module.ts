import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pokedex3Page } from './pokedex3.page';

const routes: Routes = [
  {
    path: '',
    component: Pokedex3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pokedex3PageRoutingModule {}
