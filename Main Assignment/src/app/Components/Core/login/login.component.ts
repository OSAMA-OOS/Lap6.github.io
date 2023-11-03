import { AccountService } from './../../../Services/account/account.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private accountService: AccountService) {}

  LoginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(),
  });

  get emailControl() {
    return this.LoginForm.get('email');
  }

  get passwordControl() {
    return this.LoginForm.controls['password'];
  }

  login(e: Event) {
    e.preventDefault();

    if (this.emailControl?.errors || this.passwordControl.errors) {
      console.log('error');
    } else {
      this.accountService.login(
        this.emailControl?.value,
        this.passwordControl.value
        );
        console.log('done');
    }
  }
}
