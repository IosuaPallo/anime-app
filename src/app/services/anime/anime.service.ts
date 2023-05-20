import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { doc, where } from 'firebase/firestore';
import { map, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Anime, AnimeAddRequest, AnimeDescription, Genre } from '../../models/interfaces/anime';
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
    const anime = this.firestore.collection<Anime>('Anime').valueChanges({idField:"id"});
    return anime;
  }

  getAllOnGoingAnime() {

    const ongoingAnime = this.firestore.collection<Anime>('Anime', ref => {
      return ref
        .where("status", "==", `${StatusType.Ongoing}`);
    }).valueChanges({idField:"id"});
    return ongoingAnime;
  }

  getPopularAnime() {
    const popularAnime = this.firestore.collection<Anime>('Anime', ref => {
      return ref.where('isPopular', '==', true);
    }).valueChanges({ idField: "id" });
    return popularAnime;
  }


  getAnime(id: string) {
    const anime = this.firestore.collection<Anime>(`Anime`, ref=>{
      return ref.where('__name__','==',id).
      limit(1);
    }).valueChanges({ idField: "id" }).pipe(map(val => val.length > 0 ? val[0] : null));
    return anime;
  }

  getAnimeDescription(id: string) {
    const animeDescription = this.firestore.collection<AnimeDescription>('Anime-Description', ref => {
      return ref
        .where(`animeId`, `==`, `${id}`).limit(1);
    }).valueChanges({ idField: "id" }).pipe(map(val => val.length > 0 ? val[0] : null));
    return animeDescription;
  }

  saveAnime(anime: Anime) {
    this.firestore.collection<Anime>('Anime').doc().set(anime);

  }


}


