import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/registration/registrationSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
