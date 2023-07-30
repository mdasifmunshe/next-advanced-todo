import axios from 'axios';

const todoApi = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getAllTodos = () => todoApi.get('/todo').then((res) => res.data);

export const todoById = (param) =>
  todoApi.get(`/todo/${param}`).then((res) => res.data);

export const updatetodo = (param, values) =>
  todoApi.put(`/todo/${param}`, values).then((res) => res.data);

export const deleteTodo = (param) =>
  todoApi.delete(`/todo/${param}`).then((res) => res.data);
