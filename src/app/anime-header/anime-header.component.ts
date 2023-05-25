import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Photo} from "../models/photo";
import {PhotoService} from "../services/photo/photo.service";
import {StorageService} from "../services/storage/storage.service";

@Component({
  selector: 'app-anime-header',
  templateUrl: './anime-header.component.html',
  styleUrls: ['./anime-header.component.css']
})
export class AnimeHeaderComponent implements OnInit{
 logo!:Photo | null;

  @Output() public sidenavToggle = new EventEmitter();
  constructor(private photoService:PhotoService,
              private storageService:StorageService) {
  }

  ngOnInit(): void {
    this.setLogo();
  }

  private setLogo() {
    this.photoService.getLogo().subscribe(photo=>{
      this.logo = photo;
      if(this.logo) {
        this.logo.url = this.setPhotoUrl(this.logo.path);
      }
    })
  }

  private setPhotoUrl(path:string){
    return this.storageService.getFile(path);
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
