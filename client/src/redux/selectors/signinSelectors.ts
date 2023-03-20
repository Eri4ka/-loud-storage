import { RootState } from '../store';

export const getSignInLoading = (state: RootState) => state.user.loadingStatus;

export const getIsUserAuth = (state: RootState) => state.user.isAuth;
