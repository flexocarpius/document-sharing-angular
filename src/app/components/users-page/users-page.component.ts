import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css'],
})
export class UsersPageComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(public api: ApiService) {}

  async ngOnInit() {
    // Subscribe to authentication state changes
    this.api.isAuthenticated$.subscribe(
      (isAuthenticated: boolean) => (this.isAuthenticated = isAuthenticated)
    );
  }
}
