import { api } from "./api.ts";

type CreateTask = {
  title: string;
  description?: string | null;
  status?: string | null;
  finalDate?: string | null;
}

type UpdateTask = {
  title?: string | null;
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
      }
      console.log("Find Tasks Error");
  }
}

export async function findUniqueTask(token: string, taskId: string) {
  try {
    const response = await api.get(`/tasks/${taskId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data;

  } catch(err: any) {
      console.log("Find Unique Tasks Error");
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
    return console.log('Create Task Error')
  } 
}

export async function updateTask(token: string, taskId: string, task: UpdateTask) {
  try {
    const response = await api.patch(`/tasks/${taskId}`, {
      ...task
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data;
  } catch (err) {
    return console.log('Update Task Error')
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
    return console.log('Delete Task Error');
  }
}

export function getISOStringDate(date: string) {
  const newDate = new Date(date);
  newDate.setHours(24);
  return newDate.toISOString();
}

export function getDefaultStringDate(isoDate: string) {
  const newDate = new Date(isoDate).toISOString().split("T")[0];
  return newDate;
}

