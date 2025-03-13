import { Component } from '@angular/core';
import { MeterdatosComponent } from './meterdatos/meterdatos.component';

@Component({
  selector: 'app-cuerpo',
  imports: [MeterdatosComponent],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {

  buttonPressed: boolean = false;

  botonPressed() {
    this.buttonPressed = !this.buttonPressed;
  }

}
