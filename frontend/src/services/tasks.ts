import { api } from "./api.ts";

export async function findAll() {
  const response = await api.get('/tasks')
  return response.data;
}

