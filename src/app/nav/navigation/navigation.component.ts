import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DeckService, Deck } from './../../shared/deck.service';
import { GameService } from './../../game/game.service';
import { SharedService } from './../../shared/shared.service';
import { Player } from './../../userprofile/player/player.component';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  decks$;
  _deck: Deck;
  player: Player;
  authenticated: Boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
    public deck: DeckService,
    public game: GameService,
    public sharedService: SharedService,
    public authService: AuthService) {
    this.decks$ = this.deck.getData().then(data => data['deck'].map(x => x));
    sharedService.standardDeck.subscribe(currentDeck => this._deck = currentDeck);
    sharedService.currentPlayer.subscribe(player => this.player = player);
    this.authenticated = authService.authenticated;
  }

  newGame(e) {
    console.log(e.currentTarget.innerText);
    this.game.changeDeck(e.currentTarget.innerText);
    this.game.newGame();
  }

  logOut() {
    this.player.set = false;
    this.sharedService.logOut();
  }

  login() {
    console.log(`Need to login...`);
  }

}
