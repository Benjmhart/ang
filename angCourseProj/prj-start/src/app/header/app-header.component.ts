import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  @Input()
  activeComponent: string;
  @Output()
  navEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onNavClick(event: string) {
    this.navEvent.emit(event);
  }
}
