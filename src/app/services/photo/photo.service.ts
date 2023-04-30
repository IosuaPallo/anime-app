import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoRequest, Photo } from '../../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  getMainPhoto(photoRequest: PhotoRequest): Observable<Photo> {
    const mainPhoto = of();
    return mainPhoto;
  }

  getPhotos(photoRequest: PhotoRequest): Observable<PhotoRequest[]> {
    const photos = of();
    return photos; 
  }

}
