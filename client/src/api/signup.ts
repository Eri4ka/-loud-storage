import api, { ErrorResponse } from './axios';

const signupFetch = async (email: string, password: string) => {
  try {
    const response = await api.post('auth/registration', {
      email,
      password,
    });
    const data = await response.data;
    return data;
  } catch (e) {
    const error = e as ErrorResponse;
    throw error.response?.data.message;
  }
};

export default signupFetch;
