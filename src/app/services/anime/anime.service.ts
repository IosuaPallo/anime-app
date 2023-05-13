import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { where } from 'firebase/firestore';
import { map, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Anime, AnimeAddRequest } from '../../models/interfaces/anime';
import { PhotoType } from '../../photoType';
import { StatusType } from '../../statusType';
import { PhotoService } from '../photo/photo.service';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  constructor(private firestore: AngularFirestore) {
  }

  getAllAnime() {
    const anime = this.firestore.collection('Anime').snapshotChanges();
    return anime; 
  }

  getAllOnGoingAnime() {
    
    const ongoingAnime = this.firestore.collection('Anime', ref => {
      return ref
        .where("status", "==", `${StatusType.Ongoing}`);
    }).snapshotChanges(); 
    return ongoingAnime; 
  }

  getPopularAnime() {
    const popularAnime = this.firestore.collection('Anime', ref => {
      return ref.where('isPopular', '==', true);
    }).snapshotChanges();
    return popularAnime;
  }


  getAnime(id: string) {
    const anime = this.firestore.collection('Anime', ref => {
      return ref
        .where('id', "==", `${id}`).limit(1);
    }).snapshotChanges(); 
    return anime;
  }

  getAnimeDescription(id: string) {
    const animeDescription = this.firestore.collection('AnimeDescription', ref => {
      return ref
        .where(`animeId`, `==`, `${id}`).limit(1);
    }).snapshotChanges();
    return animeDescription;
  }

  getGenres(id: string) {
    return this.firestore.collection('Genres', ref => {
      return ref.where('animeId', '==', id);
    }).snapshotChanges();
  }


/*  addAnime(animeAddRequest: AnimeAddRequest) {
  }
*/



}

 
