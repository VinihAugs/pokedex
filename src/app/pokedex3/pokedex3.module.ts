import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pokedex3PageRoutingModule } from './pokedex3-routing.module';
import { PipesModule } from '../pipes/pipes.module';

import { Pokedex3Page } from './pokedex3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pokedex3PageRoutingModule,
    PipesModule
  ],
  declarations: [Pokedex3Page]
})
export class Pokedex3PageModule {}
