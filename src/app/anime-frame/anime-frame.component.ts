import { Component, Input } from '@angular/core';
import { Photo } from '../interfaces/photo';
import { PhotoType } from '../photoType';

@Component({
  selector: 'app-anime-frame',
  templateUrl: './anime-frame.component.html',
  styleUrls: ['./anime-frame.component.css']
})
export class AnimeFrameComponent {
  @Input() animeId?: string;
  @Input() mainPhoto?: Photo;
}
