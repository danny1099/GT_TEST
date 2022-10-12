import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, setLocalStorage } from '@/helpers';
import { IPerson } from '@/models';

const initialState: IPerson[] = [];

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: getLocalStorage('favorites')
    ? JSON.parse(getLocalStorage('favorites') as string)
    : initialState,

  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage('favorites', action.payload);
      return action.payload;
    },
  },
});

export const { addFavorite } = favoriteSlice.actions;
