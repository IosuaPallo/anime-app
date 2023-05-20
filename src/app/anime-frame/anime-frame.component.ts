import { Component, Input, OnInit } from '@angular/core';
import { doc } from 'firebase/firestore';
import { Anime, AnimeDescription } from '../models/interfaces/anime';
import { Photo } from '../models/interfaces/photo';
import { PhotoType } from '../photoType';
import { AnimeService } from '../services/anime/anime.service';
import { PhotoService } from '../services/photo/photo.service';

@Component({
  selector: 'app-anime-frame',
  templateUrl: './anime-frame.component.html',
  styleUrls: ['./anime-frame.component.css']
})
export class AnimeFrameComponent implements OnInit {

  @Input() animeId?: string;
  mainPhoto?: Photo | null;
  anime?: Anime | null;

  constructor(private animeService: AnimeService, private photoService:PhotoService) {

  }

  ngOnInit(): void {
    this.setAnime();
    this.setMainPhoto();
  }

  setMainPhoto() {
    if (this.animeId) {
      this.photoService.getMainPhoto(this.animeId).subscribe(photo=>this.mainPhoto = photo);
    }
  }

  setAnime() {
    if (this.animeId) {
       this.animeService.getAnime(this.animeId).subscribe(anime=>this.anime=anime);
    }
  }

}
