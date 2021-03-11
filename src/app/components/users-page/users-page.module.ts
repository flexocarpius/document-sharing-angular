// imports
import { NgModule } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { UsersComponent } from '../users/users.component';
import { UsersPageComponent } from './users-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserPageComponent } from '../create-user-page/create-user-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: UsersPageComponent,
  },
  {
    path: 'create',
    component: CreateUserPageComponent,
  },
];

// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    UsersPageComponent,
    CreateUserPageComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  providers: [],
  bootstrap: [
    UserComponent,
    UsersComponent,
    UsersPageComponent,
    CreateUserPageComponent,
  ],
  exports: [RouterModule],
})
export class UsersModule {}
