import { StatusType } from "../statusType";
import { Photo } from "./photo";


export interface Anime {
  id: string;
  name: string;
  status: StatusType;
}


export interface AnimeDescription  extends Anime{
  plot: string;
  type: string;
  genre: Genre[];
  released: string;
  photos: Photo[];
  mainPhoto: Photo;
}

export interface OngoingAnime extends Anime {
  mainPhoto: Photo;
}

export interface OngoingAnimeRequest {
  animeId: string;
  status: StatusType.Ongoing;
}

export interface Genre {
  id: string;
  animeId: string;
  genre: string; 
}
