import axios, { AxiosError } from 'axios';

type Error = {
  message: string[];
};

export type ErrorResponse = AxiosError<Error>;

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default api;
