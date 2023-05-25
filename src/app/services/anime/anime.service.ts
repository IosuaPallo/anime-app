import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {map} from 'rxjs';
import {Anime, AnimeDescription} from '../../models/anime';
import {StatusType} from '../../statusType';

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
    return this.firestore.collection<AnimeDescription>('Anime-Description', ref => {
      return ref
        .where(`animeId`, `==`, `${id}`)
        .limit(1);
    }).valueChanges({idField: "id"}).pipe(map(val => val.length > 0 ? val[0] : null));
  }

  async saveAnime(anime: Anime) {
    const newAnime = this.firestore.collection('anime').doc();
    await newAnime.set(anime);
  }


}


