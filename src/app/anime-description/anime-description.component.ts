import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AnimeService } from '../services/anime/anime.service';
import { Photo } from '../models/interfaces/photo';
import { Anime, AnimeDescription, Genre } from '../models/interfaces/anime';
import { PhotoService } from '../services/photo/photo.service';
import { doc } from '@angular/fire/firestore';

@Component({
  selector: 'app-anime-description',
  templateUrl: './anime-description.component.html',
  styleUrls: ['./anime-description.component.css']
})
export class AnimeDescriptionComponent implements OnInit {
  constructor(private route: ActivatedRoute, private animeService: AnimeService, private photoService: PhotoService) {
  }

  animeId?: string;
  mainPhoto?: Photo;
  anime?: Anime;
  animeDescription?: AnimeDescription;
  photos?: Photo[];
  animeGenres?: Genre[];

  ngOnInit(): void {
    this.animeId = this.route.snapshot.params['id']; 
    this.setAnime();
    this.setAnimeDescription();
    this.setMainPhoto();
    this.setPhotos();
    this.setGenres(); 
  }

  setGenres() {
    if (this.animeId) {
      this.animeService.getGenres(this.animeId).subscribe(response => {
        this.animeGenres = response.map(document => {
          return {
            id: document.payload.doc.id,
            animeId: document.payload.doc.get('animeId'),
            genre: document.payload.doc.get('genre'), 
          } as Genre;
        })
      })
    }
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

  setPhotos() {
    if (this.animeId) {
      this.photoService.getMainPhoto(this.animeId).subscribe(response => {
        this.photos = response.map(document => { 
          return {
            id: document.payload.doc.id,
            animeId: document.payload.doc.get('animeId'),
            path: document.payload.doc.get('path'),
            type: document.payload.doc.get('type'),
          } as Photo;
        })
      });
    }
  }

  setAnimeDescription() {
   
    if (this.animeId) {
      this.animeService.getAnimeDescription(this.animeId).subscribe(response => {
        response.forEach(document => {
          const animeDescription = {
            id: document.payload.doc.id,
            plot: document.payload.doc.get('plot'),
            type: document.payload.doc.get('type'),
            animeId: this.animeId,
            released: document.payload.doc.get('released'),
          } as AnimeDescription;
          this.animeDescription = animeDescription;
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
