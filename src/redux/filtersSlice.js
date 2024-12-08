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
    limit: 4,
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      state.filters = action.payload;
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
    updateLimit(state, action) {
      state.filters.limit = action.payload;
    },
  },  
})

export const { updateFilters, resetFilters, updateLimit } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;