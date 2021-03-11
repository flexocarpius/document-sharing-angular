import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DocumentApplication } from '../../models/document.model';
import { ApiService } from '../../services/api.service';
import { User } from '../../models/user.model';
import { AppState } from '../../store/reducers/users.reducer';
import { documentAdd } from 'src/app/store/actions/documents.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documents-create-page',
  templateUrl: './documents-create-page.component.html',
  styleUrls: ['./documents-create-page.component.css'],
})
export class DocumentsCreatePageComponent implements OnInit {
  documentForm: FormGroup;
  users$: Observable<User[]>;
  users: User[];

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.documentForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      user: ['', [Validators.required]],
    });

    this.users$ = this.store.select(
      (appState: AppState) => appState.users.users
    );
    this.users$.subscribe(users => this.users = users);
  }

  get name() {
    return this.documentForm.get('name');
  }

  get description() {
    return this.documentForm.get('description');
  }

  get user() {
    return this.documentForm.get('user');
  }

  async onClick(event) {
    if (this.documentForm.invalid) {
      return;
    }

    const filteredUsers = this.users.filter(u => u.id === this.user.value);
    let selectedUser = null;
    if (filteredUsers && filteredUsers.length > 0) {
      selectedUser = filteredUsers[0];
    }

    const document: DocumentApplication = {
      name: this.name.value,
      description: this.description.value,
      user: selectedUser
    };

    this.api
      .createDocument(document)
      .subscribe((doc: DocumentApplication) => {
          this.store.dispatch(documentAdd(doc));
          this.router.navigate(['documents']);
      });
  }
}
