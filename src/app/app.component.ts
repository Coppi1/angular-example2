import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'projeto-card';

  message: string = '';


  cards = [
    {
      title: 'Les Paul',
      subtitle: 'Modelo Gibson',
      image: 'https://theguitarmarketplace.com/wp-content/uploads/2023/03/Untitled-design-2023-03-06T124944.736.jpg',
      content: 'Este é um exemplo de card usando Angular Material.',
      icon: 'music_note' 
    },
    {
      title: 'Flying v jackson',
      subtitle: 'Modelo jackson',
      image: 'https://cdn.awsli.com.br/2500x2500/1005/1005709/produto/49872068e554482761.jpg',
      content: 'Exemplo.',
      icon: 'music_note'
    },
  ];

  curtir(card: any) {
    this.message = `Usuario curtiu: ${card.title}`;
  }

  compartilhar(card: any) {
    this.message = `Usuario compartilhou: ${card.title}`;
  }
}
