import { createSlice } from '@reduxjs/toolkit';

import { FileType } from '@/types/fileTypes';

import { fetchFiles } from '../actions/filesActions';

type FileSliceType = {
  files: FileType[];
  currentDir: string;
};

const initialState: FileSliceType = {
  files: [],
  currentDir: '',
};

const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFiles.fulfilled, (state, action) => {
      state.files = action.payload;
    });
  },
});

const { actions, reducer } = fileSlice;

export default reducer;
