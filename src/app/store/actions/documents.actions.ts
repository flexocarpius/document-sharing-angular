import { createAction, props } from '@ngrx/store';
import { DocumentApplication } from '../../models/document.model';

export const DOCUMENT_ADD = 'DOCUMENT_ADD';
export const DOCUMENT_REMOVE = 'DOCUMENT_REMOVE';

export const documentAdd = createAction(
  DOCUMENT_ADD,
  props<DocumentApplication>()
);
export const documentRemove = createAction(
  DOCUMENT_REMOVE,
  props<DocumentApplication>()
);
