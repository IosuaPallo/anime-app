import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime, AnimeDescriptionResponse } from '../../Interfaces/Anime';
import { PhotoType } from '../../photoType';
import { PhotoService } from '../photo/photo.service';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  constructor(private photoService:PhotoService) { }

  getAnimes(): Observable<Anime[]> {
    const animes = of();
    return animes;
  }

  getAnimeDescription(): Observable<AnimeDescriptionResponse> {
    const anime = of();
    const mainPhoto = this.photoService.getMainPhoto({ animeId: anime.id, type: PhotoType.Main });
    const photos = this.photoService.getPhotos({ animeId: anime.id, type: PhotoType.Normal });
  }
}
