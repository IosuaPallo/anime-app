import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeDescriptionComponent } from './anime-description/anime-description.component';
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
  },
  {
    component: AnimeDescriptionComponent,
    path:"animeDescription/:id",
  },
  {
    path: '',
    redirectTo: '/ongoingAnime',
    pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
