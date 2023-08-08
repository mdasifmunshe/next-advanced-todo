import axios from 'axios';

const todoApi = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getAllTodos = () =>
  todoApi.get('/api/todo').then((res) => res.data);

export const todoByParam = (param) =>
  todoApi.get(`/api/todo/${param}`).then((res) => res.data);

export const addTodo = (values) =>
  todoApi.post('/api/todo', values).then((res) => res.data);

export const updateTodo = (param, values) =>
  todoApi.put(`/api/todo/${param}`, values).then((res) => res.data);

export const deleteTodo = (param) =>
  todoApi.delete(`/api/todo/${param}`).then((res) => res.data);
