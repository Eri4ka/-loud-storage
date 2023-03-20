import api, { ErrorResponse } from './axios';

const authFetch = async (token: string) => {
  try {
    const response = await api.get('auth/auth', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.data;
    return data;
  } catch (e) {
    const error = e as ErrorResponse;
    throw error.response?.data.message;
  }
};

export default authFetch;
