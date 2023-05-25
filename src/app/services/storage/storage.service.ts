import {Injectable} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {baseURL} from "../../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage:AngularFireStorage) { }

  getFile(path: string | undefined){
    return `./assets/Poze/${path}`;
   /* const filePath = `poze/${path}`;
    const fileRef = this.storage.ref(filePath);
    return fileRef.getDownloadURL();*/
  }

  uploadFile(file:File){

  }
}
