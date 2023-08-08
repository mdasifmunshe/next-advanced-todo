import axios from 'axios';

const todoApi = axios.create({
  baseURL: 'http://localhost:3000',
});

export const userByParam = (param) =>
  todoApi.get(`/api/user/${param}`).then((res) => res.data);
