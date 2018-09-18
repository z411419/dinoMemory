import { AppComponent } from './app.component';
import { NgModule, Renderer } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { CardsComponent } from './cards/cards.component';
import { GameComponent } from './game/game.component';
import { ClicksComponent } from './nav/clicks/clicks.component';
import { StandardDeckDirective } from './shared/standard-deck.directive';
import { GameWonDirective } from './shared/game-won.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [AppComponent, NavComponent, CardsComponent, GameComponent, ClicksComponent, StandardDeckDirective, GameWonDirective],
  providers: [ StandardDeckDirective ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
