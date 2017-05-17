import { Component } from '@angular/core';
import { trigger,
         state,
         style,
         animate,
         transition } from '@angular/animations';

@Component({
    selector: 'dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css'],
    animations: [
      trigger('drop',[

        state('visible',style({
          transfrom: 'translateY(100%)'
        })),

        state('hidden',style({
          transform: 'translateY(-100%)'
        })),

        transition('visible <=> hidden', animate('300ms ease-out'))
      ])
    ]
})

export class DropdownComponent {
    state='visible';

    content = 'Nothing';

    toggle(){
      this.state = (this.state === 'visible'? 'hidden':'visible');
    }

}
