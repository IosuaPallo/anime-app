import { Component } from '@angular/core';
import { Anime } from '../Interfaces/Anime';
import { AnimeService } from '../services/Anime/Anime.service';

@Component({
  selector: 'app-Anime-list',
  templateUrl: './Anime-list.component.html',
  styleUrls: ['./Anime-list.component.css']
})
export class AnimeListComponent {
  animes?: Anime[];

  constructor(private animeService: AnimeService) {
  }

  ngOnInit(): void {
    this.setAnimes();
  }

  setAnimes(): void {
    this.animeService.getAnimes()
              .subscribe(animes => this.animes = animes); 
  }
}
