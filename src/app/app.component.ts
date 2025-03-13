import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cliente = {
    nome: '',
    idade: null,
    diferencialEntrega: '',
  };

  message: string = '';

  salvar() {
    if (
      this.cliente.nome &&
      this.cliente.idade &&
      this.cliente.diferencialEntrega
    ) {
      this.message = `Cliente "${this.cliente.nome}" salvo com sucesso!`;
      this.limparFormulario();
    } else {
      this.message = 'Por favor, preencha todos os campos!';
    }
  }

  cancelar() {
    this.limparFormulario();
    this.message = 'Cadastro cancelado.';
  }

  limparFormulario() {
    this.cliente = {
      nome: '',
      idade: null,
      diferencialEntrega: '',
    };
  }
}
