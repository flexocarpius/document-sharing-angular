import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { DocumentApplication } from 'src/app/models/document.model';
import { ApiService } from 'src/app/services/api.service';
import { AppState } from 'src/app/store/reducers/users.reducer';
import { PieData, ScatterData } from './chart-data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  isAuthenticated: boolean = true;
  users$: Observable<User[]>;
  documents$: Observable<DocumentApplication[]>;
  scatterChartConfig = {
    data: ScatterData,
    options: {
      axisX: {
        labelInterpolationFnc(value: number, index: number): string | null {
          return index % 13 === 0 ? `W${value}` : null;
        }
      },
      showLine: false
    },
    responsiveOptions: [
      [
        'screen and (min-width: 640px)',
        {
          axisX: {
            labelInterpolationFnc(
              value: number,
              index: number
            ): string | null {
              return index % 4 === 0 ? `W${value}` : null;
            }
          }
        }
      ]
    ],
    type: 'Line'
  };
  pieChartConfig = {
    data: PieData,
    options: {
      donut: true,
      showLabel: true,
    },
    type: 'Pie'
  };

  constructor(public api: ApiService, private store: Store<AppState>) {}

  async ngOnInit() {
    // Subscribe to authentication state changes
    this.api.isAuthenticated$.subscribe(
      (isAuthenticated: boolean) => (this.isAuthenticated = isAuthenticated)
    );
    this.users$ = this.store.select(
      (appState: AppState) => appState.users.users
    );
    this.documents$ = this.store.select((state) => state.documents.documents);
  }
}
