import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['admin', [Validators.required]],
      password: ['asd123', [Validators.required]]
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onClick(event) {
    if (!this.loginForm.valid) {
      return;
    }

    if (this.username.value === 'admin' && this.password.value === 'asd123') {
      this.api.setUserLoggedIn();
      this.router.navigate(['home']);
    }
  }

}
