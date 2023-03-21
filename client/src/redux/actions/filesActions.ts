import filesFetch from '@/api/files';
import { getDataFromLC } from '@/utils/helpers/localstorage';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFiles = createAsyncThunk(
  'files/fetchFiles',
  async (dirId: string, { rejectWithValue }) => {
    try {
      const token = getDataFromLC('token') ?? '';
      const response = await filesFetch(token, dirId);

      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
