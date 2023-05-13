import { Component, OnInit } from '@angular/core';
import { Anime, OngoingAnime } from '../models/interfaces/anime';
import { AnimeService } from '../services/anime/anime.service';

@Component({
  selector: 'app-popular-anime',
  templateUrl: './popular-anime.component.html',
  styleUrls: ['./popular-anime.component.css']
})
export class PopularAnimeComponent implements OnInit{
  popularAnime?: Anime[];

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.setAnimes();
  }

  setAnimes() {
    this.animeService.getPopularAnime().subscribe(response => {
      this.popularAnime = response.map(document => {
        return {
          id: document.payload.doc.id,
          name: document.payload.doc.get('name'),
          status: document.payload.doc.get('status'),
        } as Anime;
      });
    });
  }
}
