import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsPageComponent } from './documents-page.component';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from '../document/document.component';
import { DocumentsCreatePageComponent } from '../documents-create-page/documents-create-page.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: DocumentsPageComponent,
  },
  {
    path: 'create',
    component: DocumentsCreatePageComponent,
  },
];

@NgModule({
  declarations: [DocumentsPageComponent, DocumentsCreatePageComponent, DocumentComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class DocumentsPageModule {}
