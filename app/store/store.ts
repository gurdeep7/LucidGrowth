import { configureStore } from '@reduxjs/toolkit';
import sslReducer from '../slices/sslSlice';

export const store = configureStore({
  reducer: {
    ssl: sslReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
