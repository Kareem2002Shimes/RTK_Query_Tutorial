import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUser, getUsers } from '../../utils/api';

export const getUsersAsync = createAsyncThunk('users/getUsers', async () => {
  const response = await getUsers();
  return response.data;
});

export const createUserAsync = createAsyncThunk(
  'users/createUser',
  async (name) => {
    const response = await createUser(name);
    return response.data;
  }
);
