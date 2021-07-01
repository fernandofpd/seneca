import { configureStore } from '@reduxjs/toolkit';
import senecaSlice from "../features/seneca/senecaSlice";

export const store = configureStore({
  reducer: {
    seneca: senecaSlice,
  },
});
