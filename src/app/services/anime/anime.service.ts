import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime, AnimeDescription, OngoingAnime } from '../../interfaces/anime';
import { PhotoType } from '../../photoType';
import { PhotoService } from '../photo/photo.service';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  constructor(private photoService: PhotoService) { }

  getAnimes(): Observable<Anime[]> {
    const animes = of();
    return animes;
  }

  getAnimeDescription(): Observable<AnimeDescription> {
    const anime = of();
    const mainPhoto = this.photoService.getMainPhoto({ animeId: anime.id, type: PhotoType.Main });
    const photos = this.photoService.getPhotos({ animeId: anime.id, type: PhotoType.Normal });
    const animeDescription: Observable<AnimeDescription>;
    return animeDescription;

  }
  getOngoingAnimes(): Observable<OngoingAnime[]> {
    const ongoingAnimes = of();
    return ongoingAnimes;
  }

  getPopularAnimes(): Observable<> {
    const popularAnimes = of();
    return popularAnimes;
  }

  createAnime(anime: Anime): void{
    
  }


}

 
