import { Component } from '@angular/core';
import { Anime } from '../models/interfaces/anime';
import { AnimeService } from '../services/anime/anime.service';


@Component({
  selector: 'app-Anime-list',
  templateUrl: './Anime-list.component.html',
  styleUrls: ['./Anime-list.component.css'],
})
export class AnimeListComponent {
  animeList?: Anime[];
  letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  constructor(private animeService: AnimeService) {
  }

  ngOnInit(): void {
    this.setAnimes();
    this.sortAnimes(); 
  }

  setAnimes(): void {
    this.animeService.getAllAnime().subscribe(response => {
      this.animeList = response.map(document => {
        return {
          id: document.payload.doc.id,
          name: document.payload.doc.get('name'),
          status: document.payload.doc.get('status')
        } as Anime;
      });
    });
  }

  sortAnimes(): void {
    this.animeList?.sort(this.compareFn);
  }

  private compareFn(a: Anime, b: Anime): number {
    return a.name.localeCompare(b.name);
  }
}
