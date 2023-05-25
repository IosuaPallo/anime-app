import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  @Output() sidenavClose = new EventEmitter();

  onSidenavClose() {
    this.sidenavClose.emit();
  }

  ngOnInit(): void {
  }
}
