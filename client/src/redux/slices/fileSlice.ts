import { createSlice } from '@reduxjs/toolkit';

import { fetchFiles } from '../actions/filesActions';

type FileSliceType = {
  files: any[];
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
