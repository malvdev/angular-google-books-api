import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BOOK_FEATURE_KEY, State, bookAdapter } from './book.reducer';

export const getBookState = createFeatureSelector<State>(BOOK_FEATURE_KEY);

const { selectAll, selectEntities } = bookAdapter.getSelectors();

export const getBookLoaded = createSelector(
  getBookState,
  (state: State) => state.loaded
);

export const getBookError = createSelector(
  getBookState,
  (state: State) => state.error
);

export const getBookTotalItems = createSelector(
  getBookState,
  (state: State) => state.totalItems
);

export const getAllBook = createSelector(getBookState, (state: State) =>
  selectAll(state)
);

export const getBookEntities = createSelector(getBookState, (state: State) =>
  selectEntities(state)
);

export const selectEntitiesByID = (id: string) =>
  createSelector(getBookEntities, (entities) =>
    id ? entities[id] : undefined
  );
