import {Component, OnInit} from '@angular/core';
import {Anime} from './models/interfaces/anime';
import {AnimeService} from './services/anime/anime.service';
import {StatusType} from './statusType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'anime-app';
  anime: Anime[] = [];
  oneAnime: Anime | null = {
      id: '',
    name: '',
    status: StatusType.Null,
    isPopular:false,
  };

  constructor(private animeService: AnimeService) {
    this.anime.push();
  }

  ngOnInit(): void {
    this.animeService.getAllAnime().subscribe(anime => {
      this.anime = anime;
    });
    while(!this.anime){}
      this.getAnime();
  }

  getAnime() {
    if(this.anime.at(0)){
      const id = this.anime.at(0)?.id;
        this.animeService.getAnime(id ? id :'s79BFzfNu3qC6LfmGyKm').subscribe(anime => this.oneAnime = anime);
    }
  }
}
