import { Injectable } from '@angular/core';

@Injectable()
export class GameLogicService {
  private colours = ['green','red','yellow','blue'];
  private sequence = [this.chooseColour()];
  private playerIndex = 0; // index in sequence that player is guessing
  private gameMode = 'normal';
  private lives = 3;

  /* Randomly chooses colour */
  private chooseColour(){
    return this.colours[Math.floor(Math.random() * this.colours.length)];
  }

  private addToSequence(){
    this.sequence.push(this.chooseColour());
  }

  private resetGame(){
    this.lives = 3;
    this.sequence = [this.chooseColour()];
    this.playerIndex = 0;
  }

  /* Returns string whose value depends if player guessed correctly
   * If player guessed entire sequence correctly, return 'new'
   */
  checkSequence(colour: string){
    if(this.sequence[this.playerIndex] !== colour){
      this.lives--;

      if(this.lives <= 0){
        this.resetGame();
        return 'game over';
      }
      else{ return 'wrong'; }
    }

    this.playerIndex++;

    if(this.playerIndex === this.sequence.length){
      this.playerIndex = 0;
      this.addToSequence();

      return 'new';
    }

    return 'right';
  }

  getSequence(){
    return this.sequence;
  }
}
