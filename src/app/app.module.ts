import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppLabGameComponent } from './app-lab-game/app-lab-game.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLabGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
