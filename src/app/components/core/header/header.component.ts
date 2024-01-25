import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  downMenu: boolean = false;

  showMenu() {
    this.downMenu = !this.downMenu;
  }
}
