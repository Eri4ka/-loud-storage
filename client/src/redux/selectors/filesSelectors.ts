import { RootState } from '../store';

export const getCurrentDir = (state: RootState) => state.file.currentDir;

export const getFiles = (state: RootState) => state.file.files;
