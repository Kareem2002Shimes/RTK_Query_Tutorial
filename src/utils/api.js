import axios from 'axios';

const BASE_URL = 'http://localhost:3500';

export const getUsers = () => axios.get(`${BASE_URL}/users`);

export const createUser = (name) => {
  return axios.post(`${BASE_URL}/users`, { name });
};
