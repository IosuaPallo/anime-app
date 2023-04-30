import { Component } from '@angular/core';
import { OngoingAnime } from '../interfaces/anime';
import { AnimeService } from '../services/anime/anime.service';

@Component({
  selector: 'app-ongoing-anime',
  templateUrl: './ongoing-anime.component.html',
  styleUrls: ['./ongoing-anime.component.css']
})
export class OngoingAnimeComponent {
  ongoingAnimes?: OngoingAnime[];

  constructor(private animeService: AnimeService) {

  }

  ngOnInit(): void {
    this.getOngoingAnimes(); 
  }

  getOngoingAnimes() {
    this.animeService.getOngoingAnimes()
      .subscribe(ongoingAnimes => this.ongoingAnimes = ongoingAnimes);
  }

}
