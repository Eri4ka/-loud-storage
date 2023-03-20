import { createSlice } from '@reduxjs/toolkit';
import { fetchAuth, fetchSignIn } from '../actions/userActions';
import { IUserResponse } from '@/types/userTypes';

type UserSLiceType = {
  currentUser: IUserResponse | null;
  isAuth: boolean;
  error: string;
  loadingStatus: 'idle' | 'loading' | 'error';
};

const initialState: UserSLiceType = {
  currentUser: null,
  isAuth: false,
  error: '',
  loadingStatus: 'idle',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSignIn.pending, (state) => {
        state.loadingStatus = 'loading';
      })
      .addCase(fetchSignIn.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.loadingStatus = 'idle';
        state.isAuth = true;
        state.error = '';
      })
      .addCase(fetchSignIn.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loadingStatus = 'error';
      })
      .addCase(fetchAuth.pending, (state) => {
        state.loadingStatus = 'loading';
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.loadingStatus = 'idle';
        state.isAuth = true;
      })
      .addCase(fetchAuth.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loadingStatus = 'error';
      });
  },
});

const { actions, reducer } = userSlice;

export const { logOut } = actions;

export default reducer;
