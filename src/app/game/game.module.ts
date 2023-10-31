import { NgModule } from '@angular/core';
import { GameComponent } from './game.component';
import { GameRoutingModule } from './game-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    GameRoutingModule,
    CommonModule,
  ],
  providers: [
    GameComponent
  ],
  bootstrap: []
})
export class GameModule { }
