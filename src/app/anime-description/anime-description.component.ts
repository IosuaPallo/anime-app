import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AnimeService} from '../services/anime/anime.service';
import {Photo} from '../models/photo';
import {Anime, AnimeDescription} from '../models/anime';
import {PhotoService} from '../services/photo/photo.service';
import{Video} from "../models/video";
import {StorageService} from "../services/storage/storage.service";
import {DomSanitizer} from "@angular/platform-browser";
import {VideoService} from "../services/video/video.service";

@Component({
  selector: 'app-anime-description',
  templateUrl: './anime-description.component.html',
  styleUrls: ['./anime-description.component.css']
})
export class AnimeDescriptionComponent implements OnInit {
  isDesktop: boolean=false;
  isMobile: boolean = false;

  animeId!: string;
  mainPhoto!: Photo | null;
  anime!: Anime | null;
  animeDescription!: AnimeDescription | null;
  photos!: Photo[] | null;
  trailer!:Video | null;

  constructor(private route: ActivatedRoute,
              private animeService: AnimeService,
              private photoService: PhotoService,
              private storageService:StorageService,
              private sanitizer:DomSanitizer,
              private videoService:VideoService,
            ) {
    this.isDesktop = window.innerWidth >= 768;
    this.isMobile = window.innerWidth < 768;
  }


  async ngOnInit() {
    this.animeId = this.route.snapshot.params['id'];
    await this.setAnimeDescription();
    await this.setAnime();
    await this.setMainPhoto();
    await this.setPhotos();
    await this.setTrailer();
  }


   setMainPhoto() {
    if (this.animeId) {
      this.photoService.getMainPhoto(this.animeId).subscribe(photo => {
        this.mainPhoto = photo;
        if(this.mainPhoto) {
          this.mainPhoto.url = this.setPhotoUrl(this.mainPhoto.path);
        }
      });
    }
  }


  setPhotos() {
    if (this.animeId) {
     this.photoService.getPhotos(this.animeId).subscribe(photos => {
       this.photos = photos;
       for(let i=0;i<this.photos.length;i++){
         this.photos[i].url = this.setPhotoUrl(this.photos[i].path);
       }
     });
    }
  }

  async setAnimeDescription() {
    if (this.animeId) {
      await this.animeService.getAnimeDescription(this.animeId).subscribe(animeDescription => {
        this.animeDescription = animeDescription
      });
    }
  }

  setAnime() {
    if (this.animeId) {
    this.animeService.getAnime(this.animeId).subscribe(anime => this.anime = anime);
    }
  }

  private  setPhotoUrl(path:string) {
    return this.storageService.getFile(path);
  }

  private async setTrailer() {
    return this.videoService.getVideo(this.animeId).subscribe(video=>{
      this.trailer= video;
    })
  }
}
