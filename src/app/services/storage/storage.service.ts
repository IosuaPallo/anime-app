import { Injectable } from '@angular/core';
import {Storage} from "@angular/fire/storage";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage:AngularFireStorage) { }

  getFile(path:string){
  return this.storage.ref(path).getDownloadURL();
  }
}
