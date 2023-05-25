import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import firebase from "firebase/compat";
import storage = firebase.storage;
import {map} from "rxjs";
import {Video} from "../../models/video";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private firestore: AngularFirestore) {}

  getVideo(animeId:string){
    return this.firestore.collection<Video>('Video',ref => {
      return ref
        .where("animeId","==",animeId)
    }).valueChanges({idField:"id"}).pipe(map(val => val.length > 0 ? val[0] : null));
  }


}
