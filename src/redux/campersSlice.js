import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./operations";


const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload || "Failed to fetch campers.";
  state.isEmpty = true;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    total: null,
    currentCamper: null,
    isLoading: false,
    error: null,
    isEmpty: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.campers = []; // Очищення попередніх даних перед новим запитом
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.items;
        state.total = action.payload.total;
        state.isEmpty = action.payload.length === 0; 
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isEmpty = true;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})

export const campersReducer = campersSlice.reducer;