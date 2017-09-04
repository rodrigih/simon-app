import { Component } from '@angular/core';
import { trigger,
         state,
         style,
         animate,
         transition } from '@angular/animations';

@Component({
  selector: 'menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.css'],
  animations: [
      trigger('drop',[

        state('visible',style({
          visibility: 'visible'
          //transform:   ( this.state == 'visible' ? '' : 'translateY(100%)')
        })),

        state('hidden',style({
          visibility: 'hidden'
          //transform: 'translateY(-100%)'
        })),

        transition('visible <=> hidden', animate('300ms ease-out'))
      ])
    ]
})

export class MenuContainerComponent{
  sideMenuItems = ['How to Play','Options','High Score','Credits'];

  selectedItem = 'how to play';
  dropDownState = 'visible';

  hideDropDown(){
    this.dropDownState = 'hidden';
  }

  showDropDown(newItem){
    this.dropDownState = 'visible';
    this.selectedItem = newItem;
    console.log(newItem);
  }
}
