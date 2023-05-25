import { Component } from '@angular/core';
import { Anime } from '../models/anime';
import { AnimeService } from '../services/anime/anime.service';


@Component({
  selector: 'app-Anime-list',
  templateUrl: './Anime-list.component.html',
  styleUrls: ['./Anime-list.component.css'],
})
export class AnimeListComponent {
  animeList: Anime[] = [];
  letters: string[]=[];

  constructor(private animeService: AnimeService) {
  }

  ngOnInit(): void {
    this.setLetters();
    this.setAnimes();
    this.sortAnimes();
  }

  setAnimes(): void {
    this.animeService.getAllAnime().subscribe(anime => this.animeList = anime);
  }

  sortAnimes(): void {
    this.animeList?.sort(this.compareFn);
  }

  private compareFn(a: Anime, b: Anime): number {
    return a.name.localeCompare(b.name);
  }

  private setLetters() {
    this.letters.push("A","B",'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
  }
}
