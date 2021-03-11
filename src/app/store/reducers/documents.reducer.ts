import { Action, createReducer, on } from '@ngrx/store';
import { DocumentApplication } from '../../models/document.model';
import * as DocumentActions from '../actions/documents.actions';

export interface DocumentsState {
  documents: DocumentApplication[];
}

export const initialState: DocumentsState = {
  documents: [],
};

const userReducer = createReducer(
  initialState,
  on(DocumentActions.documentAdd, (state, action) => ({
    documents: state.documents.concat(action),
  })),
  on(DocumentActions.documentRemove, (state, action) => ({
    documents: state.documents.filter((u) => u.id !== action.id),
  }))
);

export function reducer(state: DocumentsState | undefined, action: Action) {
  return userReducer(state, action);
}
