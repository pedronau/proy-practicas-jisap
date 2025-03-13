import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CuerpoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
