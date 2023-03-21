import api, { ErrorResponse } from './axios';

const filesFetch = async (token: string, dirId: string) => {
  try {
    const response = await api.get(`files${dirId ? '?parent=' + dirId : ''}`, {
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

export default filesFetch;
