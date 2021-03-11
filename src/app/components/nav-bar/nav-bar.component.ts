import { Component, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  isAuthenticated: boolean = false;
  currentUrl: String;

  constructor(public api: ApiService, private router: Router) {}

  async ngOnInit() {
    this.api.isAuthenticated$.subscribe(
      (isAuthenticated: boolean) => (this.isAuthenticated = isAuthenticated)
    );
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.currentUrl = e.url;
      }
    });
  }

  onLogoutButtonClick(event) {
    this.api.setUserLoggedOut();
  }
}
