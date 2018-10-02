import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeComponent: string = 'recipes';

  handleNavEvent(event: string) {
    this.activeComponent = event;
  }
}
