import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DocumentApplication } from '../../models/document.model';
import { documentAdd } from '../../store/actions/documents.actions';
import { ApiService } from '../../services/api.service';
import { AppState } from '../../store/reducers/users.reducer';

@Component({
  selector: 'app-documents-page',
  templateUrl: './documents-page.component.html',
  styleUrls: ['./documents-page.component.css'],
})
export class DocumentsPageComponent implements OnInit {
  documents$: Observable<DocumentApplication[]>;
  isAuthenticated: boolean;

  constructor(public api: ApiService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.api.isAuthenticated$.subscribe((isAuth) => {
      this.isAuthenticated = isAuth;
    });

    this.documents$ = this.store.select((state) => state.documents.documents);
  }
}
