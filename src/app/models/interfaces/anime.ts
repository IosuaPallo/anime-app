
import { StatusType } from "../../statusType";
import { Photo } from "./photo";


export interface Anime {
  id: string;
  name: string;
  status: StatusType;
  isPopular:boolean;
}

export interface AnimeDescription{
  id: string;
  animeId: string;
  plot: string;
  type: string;
  released: string;
  genres:string[];
}

export interface OngoingAnime {
  id: string;
  name: string;

}

export interface Genre {
  id: string;
  animeId: string;
  genre: string;
}

export interface AnimeAddRequest {
  animeName: string;
  plot: string;
  type: string;
  genre: Genre[];
  released: string;
  photos: Photo[];
  mainPhoto: Photo;
}

