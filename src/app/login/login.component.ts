import {Component} from '@angular/core';
import {LanguageSelectorComponent} from "../language-selector/language-selector.component";
import {LoginFormComponent} from "../login-form/login-form.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LanguageSelectorComponent,
    LoginFormComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  constructor() {
  }

}
