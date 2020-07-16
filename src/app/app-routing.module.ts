import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { CreatorsComponent } from './creators/creators.component';
import { SeriesComponent } from './series/series.component';
import { DetailCharacterComponent } from './characters/character/detail-character/detail-character.component';
import { DetailComicComponent } from './comics/comic/detail-comic/detail-comic.component';
import { DetailCreatorComponent } from './creators/creator/detail-creator/detail-creator.component'

const routes: Routes = [
  {
    path:'', redirectTo: '/characters', pathMatch: 'full'
},
{
  path: 'characters', component: CharactersComponent
},
{
  path: 'detail-character/:id', component: DetailCharacterComponent
},
{
  path: 'comics', component: ComicsComponent
},
{
  path: 'detail-comic/:id', component: DetailComicComponent
},
{
  path: 'creators', component: CreatorsComponent
},
{
  path: 'detail-creator/:id', component: DetailCreatorComponent
},
{
  path: 'series', component: SeriesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
