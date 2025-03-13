import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cadastrar' },
  { path: 'cadastrar', component: CadastrarClienteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
