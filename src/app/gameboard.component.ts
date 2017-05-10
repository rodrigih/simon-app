import { Component } from '@angular/core';

import { trigger,
         state,
         style,
         animate,
         transition } from '@angular/animations';

@Component({
    selector: 'game-board',
    templateUrl: './gameboard.component.html',
    styleUrls: ['./gameboard.component.css'],
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

  // Object holds colours to use when piece is lit
  colourStates = {
    'green': 'green',
    'red': 'red',
    'yellow': 'yellow',
    'blue': 'blue'
  }

  lightPiece(colour: string){
    var state = this.colourStates[colour];
    this.colourStates[colour] = (state === colour?colour+'Lit':colour)
  }
}
