import { StatusType } from "../statusType";
import { PhotoResponse } from "./photo";


export interface Anime {
  id: string;
  name: string;
}

export interface AnimeListResponse {
  id: string;
  name: string;
}

export interface AnimeDescriptionResponse {
  id: string;
  animeId: string; 
  plot: string;
  type: string;
  genre: Genre[];
  released: string;
  status: StatusType;
  photos: PhotoResponse[];
  mainPhoto: PhotoResponse;
}

export interface AnimeOnGoingResponse {
  anime: Anime;
  mainPhoto: PhotoResponse;
}

export interface Genre {
  id: string;
  animeId: string;
  genre: string; 
}
