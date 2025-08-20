import axios from "axios";

export const api = axios.create({
  baseURL: 'https://sitetarefas.onrender.com'
})