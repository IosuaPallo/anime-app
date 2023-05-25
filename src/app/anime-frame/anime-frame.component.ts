import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {doc} from 'firebase/firestore';
import {Anime, AnimeDescription} from '../models/anime';
import {Photo} from '../models/photo';
import {PhotoType} from '../photoType';
import {AnimeService} from '../services/anime/anime.service';
import {PhotoService} from '../services/photo/photo.service';
import {StorageService} from "../services/storage/storage.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-anime-frame',
  templateUrl: './anime-frame.component.html',
  styleUrls: ['./anime-frame.component.css']
})
export class AnimeFrameComponent implements OnInit {

  @Input() animeId!: string;
  mainPhoto!: Photo | null;
  anime!: Anime | null;
  url!:string;

  constructor(private animeService: AnimeService,
              private photoService: PhotoService,
              private storageService: StorageService) {

  }


  ngOnInit(): void {
    this.setAnime();
    this.setMainPhoto();
    this.setMainPhotoUrl();
  }

  setMainPhoto() {
    this.photoService.getMainPhoto(this.animeId).subscribe(photo => {
      this.mainPhoto = photo;
      this.setMainPhotoUrl();
    });
  }

   setAnime() {
     this.animeService.getAnime(this.animeId).subscribe(anime => this.anime=anime);
  }

  setMainPhotoUrl() {
      this.url = this.storageService.getFile(this.mainPhoto?.path);
  }
}
