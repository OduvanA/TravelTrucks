import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    location: '',
    AC: false,
    transmission: '',
    kitchen: false,
    TV: false,
    bathroom: false,
    form: '',
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      const { name, value } = action.payload;
      state.filters[name] = value;
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
  },  
})

export const { updateFilters, resetFilters } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;