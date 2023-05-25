import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {map, Observable} from 'rxjs';
import { Photo } from '../../models/photo';
import { PhotoType } from '../../photoType';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private firestore: AngularFirestore) { }

  getMainPhoto(animeId:string ) {
    const mainPhoto = this.firestore.collection<Photo>('Photo', ref => {
      return ref.
        where('animeId', "==", animeId)
        .where('type', "==", 'main')
         .limit(1);
    }).valueChanges({idField:'id'}).pipe(map(val => val.length > 0 ? val[0] : null));
    return mainPhoto;
  }

  getPhotos(animeId:string) {
    const photos = this.firestore.collection<Photo>('Photo', ref => {
      return ref
        .where('animeId', "==", animeId)
        .where('type','==',PhotoType.Normal);
    }).valueChanges({idField:'id'});
    return photos;
  }

  getLogo(){
    return this.firestore.collection<Photo>('Photo',ref=>{
      return ref
        .where('type',"==",PhotoType.Logo)
        .limit(1);
    }).valueChanges({idField:"id"}).pipe(map(val => val.length > 0 ? val[0] : null));
  }
}
