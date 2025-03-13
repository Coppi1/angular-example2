import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';

@NgModule({
  declarations: [CadastrarClienteComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
  ],
})
export class ClienteModule {}
