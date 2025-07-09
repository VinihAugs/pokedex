import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pokedex2PageRoutingModule } from './pokedex2-routing.module';
import { PipesModule } from '../pipes/pipes.module';

import { Pokedex2Page } from './pokedex2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pokedex2PageRoutingModule,
    PipesModule
  ],
  declarations: [Pokedex2Page]
})
export class Pokedex2PageModule {}
