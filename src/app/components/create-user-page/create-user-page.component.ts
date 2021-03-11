import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'app-create-user-page',
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.css'],
})
export class CreateUserPageComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });
  }

  showStandard(text: string) {
    this.toastService.show(text);
  }

  get username() {
    return this.userForm.get('username');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get role() {
    return this.userForm.get('role');
  }

  onClick(event) {
    if (!this.userForm.valid) {
      return;
    }

    const user = {
      username: this.username.value,
      email: this.email.value,
      role: this.role.value,
      photo: `http://tinygraphs.com/squares/${this.username}?theme=seascape&numcolors=4&size=220&fmt=svg`
    };

    this.api.createUser(user).subscribe((res) => {
      this.showStandard('Created!');
      this.router.navigate(['users']);
    });
  }
}
