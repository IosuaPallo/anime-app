import { AnimeDescriptionComponent } from "./anime-description/anime-description.component";
import { Anime, AnimeDescription } from "./models/interfaces/anime";
import { AnimeService } from "./services/anime/anime.service";
import { StatusType } from "./statusType";

export class AnimeConvertor {
  constructor(private animeService: AnimeService) { }

  getAnimeDescription(animeId: string): AnimeDescription {
    var anime: AnimeDescription = {
        id: '',
        animeId: "",
        plot: "",
        type: "",
        released: ""
    }
    if (animeId) {
      this.animeService.getAnimeDescription(animeId).subscribe(response => {
        response.forEach(document => {
          const animeDescription = {
            id: document.payload.doc.id,
            plot: document.payload.doc.get('plot'),
            type: document.payload.doc.get('type'),
            animeId: animeId,
            released: document.payload.doc.get('released'),
          } as AnimeDescription;
          anime = animeDescription;
        })
      });
    }
    return anime;
  }

  getAnime(animeId: string) {
    var animeRet: Anime = {
        id: "",
      name: "",
      status: StatusType.Null,
    };
    if (animeId) {
      this.animeService.getAnime(animeId).subscribe(response => {
        response.forEach(document => {
          const anime = {
            id: document.payload.doc.id,
            name: document.payload.doc.get('name'),
            status: document.payload.doc.get('status'),
          } as Anime;
          animeRet = anime;
        });
      });
    }
    return animeRet;
  }
}
