import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Photo } from '../../models/interfaces/photo';
import { PhotoType } from '../../photoType';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private firestore: AngularFirestore) { }

  getMainPhoto(animeId:string ) {
    const mainPhoto = this.firestore.collection('Photos', ref => {
      return ref.
        where('animeId', "==", animeId)
        .where('type', "==", PhotoType.Main).limit(1);
    }).snapshotChanges();
    return mainPhoto;
  }

  getPhotos(animeId:string) {
    const photos = this.firestore.collection('Photos', ref => {
      return ref.
        where('animeId', "==", animeId);
    }).snapshotChanges();
    return photos; 
  }

}
