import axios, { AxiosError } from 'axios';

type Error = {
  message: string[];
};

type ErrorResponse = AxiosError<Error>;

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const axiosClient = async (url: string, method: string, headers?: {}, body?: {}) => {
  try {
    const response = await api({ url, method, headers, data: body });
    const data = await response.data;
    return data;
  } catch (e) {
    const error = e as ErrorResponse;
    throw error.response?.data.message;
  }
};

export default axiosClient;
