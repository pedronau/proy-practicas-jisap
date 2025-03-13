import { Component } from '@angular/core';

@Component({
  selector: 'app-meterdatos',
  imports: [],
  templateUrl: './meterdatos.component.html',
  styleUrl: './meterdatos.component.css'
})
export class MeterdatosComponent {

  testFinalizado() {
    alert('Has finalizado el test! Tu puntuación es de ' + Math.floor(Math.random() * 10));
  }
}
