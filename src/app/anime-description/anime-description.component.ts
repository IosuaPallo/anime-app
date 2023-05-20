import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AnimeService} from '../services/anime/anime.service';
import {Photo} from '../models/interfaces/photo';
import {Anime, AnimeDescription} from '../models/interfaces/anime';
import {PhotoService} from '../services/photo/photo.service';
import {PhotoType} from "../photoType";
import {StatusType} from "../statusType";
import {last} from "rxjs";
import {StorageService} from "../services/storage/storage.service";

@Component({
  selector: 'app-anime-description',
  templateUrl: './anime-description.component.html',
  styleUrls: ['./anime-description.component.css']
})
export class AnimeDescriptionComponent implements OnInit {

  animeId: string="";
  mainPhoto?: Photo | null;
  anime: Anime | null ={id: "", isPopular: false, name: "", status: StatusType.Null};
  animeDescription: AnimeDescription | null = {animeId: "", genres: [], id: "", plot: "", released: "", type: ""};
  photos: Photo[] | null=[];

  constructor(private route: ActivatedRoute, private animeService: AnimeService, private photoService: PhotoService,private storageService:StorageService) {
  }


  async ngOnInit() {
    this.animeId = this.route.snapshot.params['id'];
    await this.setAnimeDescription();
    await this.setAnime();
    await this.setMainPhoto();
    await this.setPhotos();
    await this.setMainPhotoFromStorage();
  }


   setMainPhoto() {
    if (this.animeId) {
      this.photoService.getMainPhoto(this.animeId).subscribe(photo => {
        this.mainPhoto = photo});
    }
  }


  setPhotos() {
    if (this.animeId) {
     this.photoService.getPhotos(this.animeId).subscribe(photos => this.photos = photos)
    }
  }

  async setAnimeDescription() {
    if (this.animeId) {
      await this.animeService.getAnimeDescription(this.animeId).subscribe(animeDescription => this.animeDescription = animeDescription);
    }
  }

  setAnime() {
    if (this.animeId) {
    this.animeService.getAnime(this.animeId).subscribe(anime => this.anime = anime);
    }
  }

  protected readonly last = last;

  private async setMainPhotoFromStorage() {
    //this.storageService.getFile(this.mainPhoto?.path).subscribe()
  }
}
