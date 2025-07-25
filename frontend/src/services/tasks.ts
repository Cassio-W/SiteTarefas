import { api } from "./api.ts";

type CreateTask = {
  title: string;
  description?: string;
  status?: string;
  date?: string;
}

export async function findAllTasks(token: string) {
  try {
    const response = await api.get('/tasks', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data;

  } catch(err: any) {
      if (err.response.status === 401) {
        localStorage.removeItem("token");
        await alert('Please Login or Register')
      }
      return console.log("Error");
  }
}

export async function createTask(token: string, { title, description, status = 'Aguardando', date }: CreateTask) {
  try {
    await api.post('/tasks', {
      title,
      description,
      status,
      date
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (err) {
    return console.log('Erro ao criar task')
  } 
}

export async function deleteTask(token: string, taskId: string) {
  try {
    await api.delete(`/tasks/${taskId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return
  } catch (err) {
    return console.log('Delete task error');
  }
}

