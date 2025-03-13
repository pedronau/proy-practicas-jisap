import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proy-practicas-jisap';
}
