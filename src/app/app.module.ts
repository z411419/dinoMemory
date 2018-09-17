import { AppComponent } from './app.component';
import { NgModule, Renderer } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { CardsComponent } from './cards/cards.component';
import { GameComponent } from './game/game.component';
import { ClicksComponent } from './nav/clicks/clicks.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [AppComponent, NavComponent, CardsComponent, GameComponent, ClicksComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
}
