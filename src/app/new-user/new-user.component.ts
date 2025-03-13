import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  imports: [FormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

  @Input({required: true}) userName!: string;

  enteredUserName: string = '';
  loggedIn: boolean = false;

  createUser() {
    if(this.enteredUserName !== '') {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    console.log(this.loggedIn);
  }

}
