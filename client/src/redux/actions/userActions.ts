import signinFetch from '@/api/signin';
import authFetch from '@/api/auth';
import { UserLoginType, IUserResponse } from '@/types/userTypes';
import { getDataFromLC, removeDataFromLC, setDataToLC } from '@/helpers/localstorage';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSignIn = createAsyncThunk(
  'user/fetchSignIn',
  async (data: UserLoginType, { rejectWithValue }) => {
    const { email, password } = data;
    try {
      const response: IUserResponse = await signinFetch(email, password);
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
    const response: IUserResponse = await authFetch(token);

    return response;
  } catch (e) {
    removeDataFromLC('token');
    return rejectWithValue(e);
  }
});
