import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: 'card'},
  {
    path: 'card',
    loadChildren: () => import('./card/card.module').then(m => m.CardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
