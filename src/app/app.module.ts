import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';


import { MenuComponent } from './menu/menu.component';
import { OngoingAnimeComponent } from './ongoing-anime/ongoing-anime.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { PopularAnimeComponent } from './popular-anime/popular-anime.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AnimeDescriptionComponent } from './anime-description/anime-description.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AnimeListComponent,
    PopularAnimeComponent,
    OngoingAnimeComponent,
    AnimeDescriptionComponent
  ],
  imports: [
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
