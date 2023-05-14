import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


import { MenuComponent } from './menu/menu.component';
import { OngoingAnimeComponent } from './ongoing-anime/ongoing-anime.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { PopularAnimeComponent } from './popular-anime/popular-anime.component';
import { AnimeDescriptionComponent } from './anime-description/anime-description.component';
import { AnimeFrameComponent } from './anime-frame/anime-frame.component';


import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { config } from './config';

import { FirestoreModule } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseAppModule } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import {getStorage, provideStorage} from "@angular/fire/storage";
import { AnimeHeaderComponent } from './anime-header/anime-header.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FlexLayoutModule} from "@angular/flex-layout";
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AnimeListComponent,
    PopularAnimeComponent,
    OngoingAnimeComponent,
    AnimeDescriptionComponent,
    AnimeFrameComponent,
    AnimeHeaderComponent,
    LayoutComponent,
    MenuComponent
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
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    FirestoreModule,
    FirebaseAppModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    provideStorage(() => getStorage()),
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
