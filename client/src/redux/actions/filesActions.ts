import { getDataFromLC } from '@/utils/helpers/localstorage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import FilesService from '@/services/filesService';

export const fetchFiles = createAsyncThunk(
  'files/fetchFiles',
  async (dirId: string, { rejectWithValue }) => {
    try {
      const token = getDataFromLC('token') ?? '';
      const response = await FilesService.filesFetch(token, dirId);

      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
