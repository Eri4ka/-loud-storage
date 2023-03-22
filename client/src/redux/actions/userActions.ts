import { UserLoginType } from '@/types/userTypes';
import { getDataFromLC, removeDataFromLC, setDataToLC } from '@/helpers/localstorage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '@/services/authService';

export const fetchSignIn = createAsyncThunk(
  'user/fetchSignIn',
  async (data: UserLoginType, { rejectWithValue }) => {
    const { email, password } = data;
    try {
      const response = await AuthService.signinFetch(email, password);
      setDataToLC('token', response.token);

      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const fetchAuth = createAsyncThunk('user/fetchAuth', async (_, { rejectWithValue }) => {
  try {
    const token = getDataFromLC('token') ?? '';
    const response = await AuthService.authFetch(token);

    return response;
  } catch (e) {
    removeDataFromLC('token');
    return rejectWithValue(e);
  }
});
