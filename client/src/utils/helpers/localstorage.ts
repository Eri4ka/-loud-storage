export const getDataFromLC = (key: string) => {
  return localStorage.getItem(key);
};

export const setDataToLC = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const removeDataFromLC = (key: string) => {
  localStorage.removeItem(key);
};
