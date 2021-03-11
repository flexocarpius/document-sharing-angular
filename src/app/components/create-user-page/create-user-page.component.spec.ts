import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule } from '@angular/forms';
import { OktaAuthModule, OktaAuthService, OKTA_CONFIG } from '@okta/okta-angular';

import { CreateUserPageComponent } from './create-user-page.component';

const oktaConfig = {
  issuer: 'https://dev-6194344.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/callback',
  clientId: '0oafes7j71WqSLfxP5d5',
  scopes: ['openid', 'profile'],
};

describe('CreateUserPageComponent', () => {
  let component: CreateUserPageComponent;
  let fixture: ComponentFixture<CreateUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserPageComponent ],
      imports: [FormsModule, OktaAuthModule],
      providers: [
        FormBuilder,
        HttpClient,
        HttpHandler,
        OktaAuthService,
        { provide: OKTA_CONFIG, useValue: oktaConfig },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
