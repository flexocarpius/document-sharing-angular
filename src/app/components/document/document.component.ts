import { Component, Input, OnInit } from '@angular/core';
import { DocumentApplication } from 'src/app/models/document.model';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
})
export class DocumentComponent implements OnInit {
  @Input()
  document: DocumentApplication;

  constructor() {}

  ngOnInit(): void {}
}
