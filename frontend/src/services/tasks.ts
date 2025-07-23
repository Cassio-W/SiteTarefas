import { api } from "./api.ts";

type CreateTask = {
  title: string;
  description: string;
  status: string;
  date: string;
}



export async function findAll() {
  const response = await api.get('/tasks')
  return response.data;
}

export async function create({ title, description, status, date }: CreateTask) {
  return await api.post('/tasks', {
    title,
    description,
    status,
    date
  })
}

