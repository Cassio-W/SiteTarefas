import { api } from "./api.ts";

type CreateTask = {
  title: string;
  description?: string | null;
  status?: string | null;
  finalDate?: string | null;
}

export async function findAllTasks(token: string, search?: string) {
  try {
    const url = !search ? '/tasks' : `/tasks?search=${search}`;

    const response = await api.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data;

  } catch(err: any) {
      if (err.response.status === 401) {
        localStorage.removeItem("token");
        alert('Please Login or Register')
      }
      alert("Find Tasks Error");
  }
}

export async function createTask(token: string, { title, description = null, status = 'Pendente', finalDate = null }: CreateTask) {
  try {
    const response = await api.post('/tasks', {
      title,
      description,
      status,
      finalDate
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data;
  } catch (err) {
    return alert('Create Task Error')
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
    return alert('Delete Task Error');
  }
}

