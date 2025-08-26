import { useEffect, useState } from "react"
import { findUniqueTask, getISOStringDate, updateTask, getDefaultStringDate } from "../../services/tasks"
import type { StatusType, TaskType } from "../../types/type"
import TaskInputCard from "./TaskInputCard"

type EditTaskProps = {
  taskId: string 
  closeCardFunction: () => void
  updateTaskInState: (response: TaskType) => void
}


 function EditTaskCard({ closeCardFunction, taskId, updateTaskInState }: EditTaskProps) {
  // const [selectedTask, setSelectedTask] = useState<TaskType>()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState<StatusType>('Pendente')
  const [finalDate, setDate] = useState('')
  
  async function findTask() {
    const token = localStorage.getItem('token')
    if (!token) return

    const task = await findUniqueTask(token, taskId)
    if (!task) return

    setTitle(task.title)
    setDescription(task.description) 
    setStatus(task.status)
    setDate(getDefaultStringDate(task.finalDate))
  }

  async function handleUpdateTask() {
      const token = localStorage.getItem('token')
  
      if (!token) {
        return console.log('Token error');
      }

      const ISOStringDate = getISOStringDate(finalDate)
  
      const normalizedTask = {
        title,
        description,
        status,
        finalDate: ISOStringDate
      }
      
      const task = await updateTask(token, taskId, {
        ...normalizedTask
      })
  
      if (!task) return
  
      updateTaskInState(task);
      closeCardFunction();
    }

  useEffect(() => {
    findTask()
  }, []) 

  return (
    <TaskInputCard
      setTitle={setTitle}
      setDescription={setDescription}
      setStatus={setStatus}
      setDate={setDate}
      closeCardFunction={closeCardFunction}
      onSubmit={handleUpdateTask}
      buttonText="Alterar"
      cardText="Editar Tarefa"
      values={{
        title,
        description,
        status,
        finalDate
      }}
    />
  )
}

export default EditTaskCard