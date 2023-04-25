import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { OngoingAnimeComponent } from './ongoing-anime/ongoing-anime.component';
import { PopularAnimeComponent } from './popular-anime/popular-anime.component';
const routes: Routes = [
  {
    component: OngoingAnimeComponent,
    path:"ongoingAnime", 
  },
  {
    component: AnimeListComponent,
    path:"animeList",
  },
  {
    component: PopularAnimeComponent,
    path:"popularAnime",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
