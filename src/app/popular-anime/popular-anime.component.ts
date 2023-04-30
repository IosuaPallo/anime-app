import { Component } from '@angular/core';
import { OngoingAnime } from '../interfaces/anime';

@Component({
  selector: 'app-popular-anime',
  templateUrl: './popular-anime.component.html',
  styleUrls: ['./popular-anime.component.css']
})
export class PopularAnimeComponent {
  popularAnime?: OngoingAnime[];
}
