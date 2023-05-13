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
  mainPhoto?: Photo;
  anime?: Anime;

  constructor(private animeService: AnimeService, private photoService:PhotoService) {

  }

  ngOnInit(): void {
    this.setAnime();
    this.setMainPhoto();
  }

  setMainPhoto() {
    if (this.animeId) {
      this.photoService.getMainPhoto(this.animeId).subscribe(response => {
        response.forEach(document => {
          const mainPhoto = {
            id: document.payload.doc.id,
            animeId: document.payload.doc.get('animeId'),
            path: document.payload.doc.get('path'),
            type: document.payload.doc.get('type'),
          } as Photo;
          this.mainPhoto = mainPhoto;
        })
      });
    }
  }

  setAnime() {
    if (this.animeId) {
      this.animeService.getAnime(this.animeId).subscribe(response => {
        response.forEach(document => {
          const anime = {
            id: document.payload.doc.id,
            name: document.payload.doc.get('name'),
            status: document.payload.doc.get('status'),
          } as Anime;
          this.anime = anime;
        });
      });
    }
  }
 
}
