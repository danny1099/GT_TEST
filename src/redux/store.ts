import { IPerson } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import { peopleSlice, favoriteSlice } from './states';

export interface IStore {
  people: IPerson[];
  favorites: IPerson[];
}

export default configureStore<IStore>({
  reducer: {
    people: peopleSlice.reducer,
    favorites: favoriteSlice.reducer,
  },
});
