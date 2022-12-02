import { createSlice } from '@reduxjs/toolkit';

const countriesSlice = createSlice({
  name: 'country',
  initialState: {
    countries: [],
    countryInfo: [],
    continents: [],
  },
  reducers: {
    getCountries(state, action) {
      state.countries.push(...action.payload);
    },
    getCountryInfo(state, action) {
      state.countryInfo.push(...action.payload);
    },
    getContinent(state, action) {
      state.continents.push(...action.payload);
    },
  },
});

export const { getCountryInfo, getCountries, getContinent } = countriesSlice.actions;

export default countriesSlice.reducer;
