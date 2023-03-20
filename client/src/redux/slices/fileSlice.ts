import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  files: [],
};

const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {},
});

const { actions, reducer } = fileSlice;

export default reducer;
