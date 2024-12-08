import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { location, AC, transmission, kitchen, TV, bathroom, form, limit } = getState().filters.filters;
      
      const filters = {
        location: location || undefined,
        AC: AC ? true : undefined,
        transmission: transmission === 'automatic' ? 'automatic' : undefined,
        kitchen: kitchen ? true : undefined,
        TV: TV ? true : undefined,
        bathroom: bathroom ? true : undefined,
        form: form || undefined,
        page: 1,
        limit: limit,
      };

      // Remove undefined keys
      const queryParams = new URLSearchParams();
      for (const [key, value] of Object.entries(filters)) {
        if (value !== undefined) {
          queryParams.append(key, value);
        }
      }
  
      const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
      window.history.replaceState(null, '', newUrl);
        
      const url = `/campers?${queryParams.toString()}`;

      const response = await axios.get(url);
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