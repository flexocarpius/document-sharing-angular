import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.css']
})
export class DashboardInfoComponent implements OnInit {
  @Input()
  title: String;

  @Input()
  subtitle: String;

  @Input()
  icon: String;

  @Input()
  variant: String;

  @Input()
  footerText: String;

  get getIcon() {
    return 'mdi mdi-' + this.icon;
  }

  get getVariant() {
    return 'card-header-' + this.variant;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
