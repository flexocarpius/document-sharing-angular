import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { ApiService } from '../../services/api.service';
import { AppState } from '../../store/reducers/users.reducer';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  users$: Observable<User[]>;

  constructor(private api: ApiService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.users$ = this.store.select(
      (appState: AppState) => appState.users.users
    );
  }
}
