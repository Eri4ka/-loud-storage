import { configureStore, Middleware } from '@reduxjs/toolkit';

import { removeDataFromLC } from '@/utils/helpers/localstorage';

import user, { logOut } from '../slices/userSlice';
import file from '../slices/fileSlice';

const authMiddleware: Middleware<{}> = () => (next) => (action) => {
  if (logOut.match(action)) {
    removeDataFromLC('token');
  }
  return next(action);
};

export const store = configureStore({
  reducer: { user, file },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
