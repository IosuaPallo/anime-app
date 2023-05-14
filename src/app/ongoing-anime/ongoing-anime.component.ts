import { Component } from '@angular/core';
import { Anime } from '../models/interfaces/anime';
import { Photo } from '../models/interfaces/photo';
import { AnimeService } from '../services/anime/anime.service';

@Component({
  selector: 'app-ongoing-anime',
  templateUrl: './ongoing-anime.component.html',
  styleUrls: ['./ongoing-anime.component.css']
})
export class OngoingAnimeComponent {
  ongoingAnime?: Anime[];

  constructor(private animeService: AnimeService) {

  }

  ngOnInit(): void {
    this.setAllOngoingAnime(); 
  }

  setAllOngoingAnime() {
    this.animeService.getAllOnGoingAnime().subscribe(anime => {
      this.ongoingAnime = anime;
    });
  }

}
