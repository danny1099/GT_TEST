import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, setLocalStorage } from '@/helpers';
import { IPerson } from '@/models';

const initialState: IPerson[] = [];

export const peopleSlice = createSlice({
  name: 'people',
  initialState: getLocalStorage('people')
    ? JSON.parse(getLocalStorage('people') as string)
    : initialState,

  reducers: {
    addPeople: (state, action) => {
      setLocalStorage('people', action.payload);
      return action.payload;
    },
  },
});

export const { addPeople } = peopleSlice.actions;
