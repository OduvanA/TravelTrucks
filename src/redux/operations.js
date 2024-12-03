import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async ({ page, limit }, { getState, rejectWithValue }) => {
    try {
      const { location, AC, transmission, kitchen, TV, bathroom, form } = getState().filters.filters;
      
      const params = {
        location: location || undefined,
        AC: AC ? true : undefined,
        transmission: transmission === 'automatic' ? 'automatic' : 'manual',
        kitchen: kitchen ? true : undefined,
        TV: TV ? true : undefined,
        bathroom: bathroom ? true : undefined,
        form: form || undefined,
        page: page,
        limit: limit,
      };

      console.log(params);
      

      const response = await axios.get('/campers', { params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const fetchCamperById = createAsyncThunk(
  'campers/fetchById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);