import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, Firestore } from '@angular/fire/firestore';
import {map, Observable} from 'rxjs';
import { Photo } from '../../models/interfaces/photo';
import { PhotoType } from '../../photoType';
import {ref, Storage, uploadBytes} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private firestore: AngularFirestore,
              private storage:Storage) { }

  getMainPhoto(animeId:string ) {
    let file;
    const storageRef = ref(this.storage,"sao");
   // const uploadTask = uploadBytes(storageRef,file);
    const mainPhoto = this.firestore.collection<Photo>('Photos', ref => {
      return ref.
        where('animeId', "==", animeId)
        .where('type', "==", PhotoType.Main)
         .limit(1);
    }).valueChanges({idField:'id'}).pipe(map(val => val.length > 0 ? val[0] : null));
    return mainPhoto;
  }

  getPhotos(animeId:string) {
    const photos = this.firestore.collection('Photos', ref => {
      return ref
        .where('animeId', "==", animeId)
        .where('type','==',PhotoType.Normal);
    }).valueChanges({idField:'id'});
    return photos;
  }

}
