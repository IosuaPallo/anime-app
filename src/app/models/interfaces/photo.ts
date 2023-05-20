import { PhotoType } from "../../photoType";

export interface Photo {
  id: string;
  animeId: string;
  path: string;
  type: PhotoType;
  file:File;
}

