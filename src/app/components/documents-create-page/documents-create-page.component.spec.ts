import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsCreatePageComponent } from './documents-create-page.component';

describe('DocumentsCreatePageComponent', () => {
  let component: DocumentsCreatePageComponent;
  let fixture: ComponentFixture<DocumentsCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
