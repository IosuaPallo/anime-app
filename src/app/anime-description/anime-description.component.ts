import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AnimeService } from '../services/anime/anime.service';

@Component({
  selector: 'app-anime-description',
  templateUrl: './anime-description.component.html',
  styleUrls: ['./anime-description.component.css']
})
export class AnimeDescriptionComponent {
  constructor(private route: ActivatedRoute, private animeService: AnimeService, private location: Location) {
  }

}
