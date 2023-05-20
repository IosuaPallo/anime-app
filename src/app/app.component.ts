import {Component, OnInit} from '@angular/core';
import {Anime} from './models/interfaces/anime';
import {AnimeService} from './services/anime/anime.service';
import {StatusType} from './statusType';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private route: ActivatedRoute) {
  }

  ngOnInit(): void {

  }


}
