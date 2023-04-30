import { Component } from '@angular/core';
import { Anime } from '../interfaces/anime';
import { AnimeService } from '../services/anime/anime.service';
@Component({
  selector: 'app-Anime-list',
  templateUrl: './Anime-list.component.html',
  styleUrls: ['./Anime-list.component.css']
})
export class AnimeListComponent {
  animes?: Anime[];
  letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  constructor(private animeService: AnimeService) {
  }

  ngOnInit(): void {
    this.setAnimes();
  }

  setAnimes(): void {
    this.animeService.getAnimes()
              .subscribe(animes => this.animes = animes); 
  }

  sortAnimes(): void {
    this.animes?.sort(this.compareFn);
  }

  private compareFn(a: Anime, b: Anime): number {
    return a.name.localeCompare(b.name);
  }
}
