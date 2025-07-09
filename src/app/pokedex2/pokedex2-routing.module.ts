import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pokedex2Page } from './pokedex2.page';

const routes: Routes = [
  {
    path: '',
    component: Pokedex2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pokedex2PageRoutingModule {}
