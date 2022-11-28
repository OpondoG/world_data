import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from '../components/countries/countries';

const store = configureStore({
  reducer: { country: countriesSlice },
});

export default store;
