import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cliente' }, // Redireciona para 'cliente'
  {
    path: 'cliente',
    loadChildren: () =>
      import('./cliente/cliente.module').then((m) => m.ClienteModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
