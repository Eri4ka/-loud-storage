import axiosClient from '@/api/axiosClient';
import { IUserResponse } from '@/types/userTypes';

export default class AuthService {
  static async signinFetch(email: string, password: string): Promise<IUserResponse> {
    const response = await axiosClient('auth/login', 'POST', {}, { email, password });
    return response;
  }

  static async signupFetch(email: string, password: string): Promise<IUserResponse> {
    const response = await axiosClient('auth/registration', 'POST', {}, { email, password });
    return response;
  }

  static async authFetch(token: string): Promise<IUserResponse> {
    const response = await axiosClient('auth/auth', 'GET', { Authorization: `Bearer ${token}` });
    return response;
  }
}
