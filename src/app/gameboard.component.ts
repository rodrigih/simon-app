import { Component } from '@angular/core';
import { trigger,
         state,
         style,
         animate,
         transition } from '@angular/animations';
import { GameLogicService } from './game-logic.service';

@Component({
    selector: 'game-board',
    templateUrl: './gameboard.component.html',
    styleUrls: ['./gameboard.component.css'],
    providers: [ GameLogicService ],
    animations: [
        trigger('changeColour',[

          state('green',style({
            backgroundColor: '#009900'
          })),
          state('greenLit',style({
              backgroundColor: '#00FF00',
              boxShadow: '10px 10px 100px 0px #00FF00'
          })),

          state('red',style({
            backgroundColor: '#DE0026'
          })),
          state('redLit',style({
              backgroundColor: 'red',
              boxShadow: '10px 10px 100px 0px red'
          })),

          state('yellow',style({
            backgroundColor: '#FFC300'
          })),
          state('yellowLit',style({
              backgroundColor: 'yellow',
              boxShadow: '10px 10px 100px 0px yellow'
          })),

          state('blue',style({
            backgroundColor: '#025DE1'
          })),
          state('blueLit',style({
              backgroundColor: '#1172FF',
              boxShadow: '10px 10px 100px 0px #1172FF'
          })),
          transition('green <=> greenLit',animate('100ms ease-out')),
          transition('red <=> redLit',animate('100ms ease-out')),
          transition('yellow <=> yellowLit',animate('100ms ease-out')),
          transition('blue <=> blueLit',animate('100ms ease-out'))
        ]),

      ]
})

export class GameBoardComponent {
  constructor(private gameLogicService: GameLogicService) { }

  // Flag used to determine whether gameboard is busy playing a sequence
  busy = false;

  // Object holds states of each individual colour
  colourStates = {
    'green': 'green',
    'red': 'red',
    'yellow': 'yellow',
    'blue': 'blue'
  }

  // Holds players sequence
  index = 0;

  lightPiece(colour: string){
    var state = this.colourStates[colour];
    this.colourStates[colour] = (state === colour?colour+'Lit':colour)
  }

  pressPiece(colour: string){
    if(this.busy){return;}

    var status = this.gameLogicService.checkSequence(colour);
    console.log(status);

    this.lightPiece(colour);
    setTimeout(this.lightPiece.bind(this),500,colour);

    if(status === 'wrong'){
      //TODO: notify player is wrong
      console.log('wrong');
      this.playSequence();
    }

    else if (status === 'new'){
      this.playSequence();
    }
    else if (status === 'gameOver'){
      console.log('Game Over');
    }
  }

  playSequence(){
     var seq = this.gameLogicService.getSequence();
     var index = 0;

     this.busy = true;

     var id = setInterval(() => {
      if(index >= seq.length) {
        clearInterval(id);
        this.busy = false;
        return;
      }

      var c = seq[index];
      index++;
      this.lightPiece(c);
      setTimeout(this.lightPiece.bind(this),1000,c);
    },1500);
  }

}
