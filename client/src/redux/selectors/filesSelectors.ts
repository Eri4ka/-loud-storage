import { RootState } from '../store';

export const getCurrentDir = (state: RootState) => state.file.currentDir;
