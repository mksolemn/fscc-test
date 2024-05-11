import { Component } from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatError, MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {NgClass, NgIf} from "@angular/common";
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators} from "@angular/forms";
import {ButtonComponent} from "./button/button.component";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    MatButton,
    MatError,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatSuffix,
    NgIf,
    ReactiveFormsModule,
    NgClass,
    ButtonComponent
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  loginForm!: FormGroup;
  showPassword: boolean = true;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, this.emailValidator()]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const isValid = EMAIL_REGEX.test(control.value);
      return isValid ? null : {'invalidEmail': {value: control.value}};
    };
  }

  emailErrorMessage() {
    if(this.loginForm.get(['email'])?.errors?.['required']) {
      return 'Reikalingas El. paštą'
    } else if(this.loginForm.get(['email'])?.errors?.['invalidEmail']){
      return 'Netinkamas El. paštas'
    }
    return;
  }

  passwordErrorMessage() {
    if(this.loginForm.get(['password'])?.errors?.['required']) {
      return 'Reikalingas slaptažodis'
    } else if(this.loginForm.get(['password'])?.errors?.['minlength']){
      return 'Slaptažodis per trumpas'
    }
    return;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


  onSubmit(){
    console.log(this.loginForm.value)
  }

}
