import { Component } from '@angular/core';

@Component({
    selector: 'side-menu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.css'],
})

export class SideMenuComponent{
  state = 'hidden';
  items = ['How To Play', 'Mode', 'High Score', 'Credits'];

}
