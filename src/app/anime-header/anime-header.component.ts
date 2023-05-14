import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Photo} from "../models/interfaces/photo";

@Component({
  selector: 'app-anime-header',
  templateUrl: './anime-header.component.html',
  styleUrls: ['./anime-header.component.css']
})
export class AnimeHeaderComponent implements OnInit{
 logo?:Photo;

  @Output() public sidenavToggle = new EventEmitter();

  ngOnInit(): void {
    this.setLogo();
  }

  private setLogo() {

  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
