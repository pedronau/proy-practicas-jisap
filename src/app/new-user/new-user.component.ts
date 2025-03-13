import { Component } from '@angular/core';
import { General } from '../general.service';

@Component({
  selector: 'app-new-user',
  imports: [],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

  constructor(private servicioGeneral: General) {}

  createUser() {
    this.servicioGeneral.addUser;
  }

}
