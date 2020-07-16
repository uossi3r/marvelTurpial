import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';
import { CharacterComponent } from './characters/character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ComicComponent } from './comics/comic/comic.component';
import { ComicsComponent } from './comics/comics.component';
import { CreatorComponent } from './creators/creator/creator.component';
import { SerieComponent } from './series/serie/serie.component';
import { SeriesComponent } from './series/series.component';
import { CreatorsComponent } from './creators/creators.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DetailCharacterComponent } from './characters/character/detail-character/detail-character.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailComicComponent } from './comics/comic/detail-comic/detail-comic.component';
import { DetailCreatorComponent } from './creators/creator/detail-creator/detail-creator.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CharacterComponent,
    CharactersComponent,
    ComicComponent,
    ComicsComponent,
    CreatorComponent,
    SerieComponent,
    SeriesComponent,
    CreatorsComponent,
    DetailCharacterComponent,
    DetailComicComponent,
    DetailCreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    InfiniteScrollModule,
    HttpClientModule,
    FlexLayoutModule,
    NgbModule,
    NgxPaginationModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
