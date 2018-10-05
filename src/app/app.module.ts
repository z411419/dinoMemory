import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule, MatIconModule, MatMenuModule, MatToolbarModule, 
  MatSidenavModule, MatListModule, MatTableModule, MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';

import { CardsComponent } from './game/cards/cards.component';
import { ClicksComponent } from './game/clicks/clicks.component';
import { GameComponent } from './game/game.component';
import { ScoreComponent } from './game/score/score.component';
import { NavigationComponent } from './nav/navigation/navigation.component';
import { PlayerComponent } from './game/player/player.component';
import { ScoreboardComponent } from './game/scoreboard/scoreboard.component';
import { TimerComponent } from './game/timer/timer.component';

import { StandardDeckDirective } from './shared/standard-deck.directive';
import { GameWonDirective } from './shared/game-won.directive';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { DisableClickDirective } from './shared/disable-click.directive';

import { StorageServiceModule } from 'angular-webstorage-service';
import { HoldableDirective } from './shared/holdable.directive';
import { LayoutModule } from '@angular/cdk/layout';
import { GameModule } from './game/game.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    StorageServiceModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatInputModule,
    MatIconModule, MatMenuModule, LayoutModule,
    MatToolbarModule, MatSidenavModule, MatListModule,
    MatTableModule, MatCardModule,
    GameModule
    ],
  declarations: [AppComponent,
    GameComponent, StandardDeckDirective, GameWonDirective,
    DisableClickDirective, HoldableDirective, NavigationComponent, PlayerComponent, ScoreboardComponent],
  providers: [ StandardDeckDirective ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
