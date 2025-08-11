import { useState } from "react"
import { createTask, getISOStringDate } from "../../services/tasks"
import type { TaskType } from "../../types/type.ts"
import type { StatusType } from "../../types/type.ts"
import TaskInputCard from "./TaskInputCard.tsx"

type NewTaskProp = {
  closeCardFunction: () => void
  addTaskInState: (response: TaskType) => void
}



function NewTaskCard({ closeCardFunction, addTaskInState }: NewTaskProp) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState<StatusType>('Pendente')
  const [finalDate, setDate] = useState('')

  

  async function handleCreateTask() {
    const token = localStorage.getItem('token')

    if (!token) {
      alert('Please Login or Register');
      return console.log('Token error');
    }

    const ISOStringDate = getISOStringDate(finalDate)

    const normalizedTask = {
      title,
      description: description !== '' ? description : null,
      status,
      finalDate: finalDate !== '' ? ISOStringDate : null
    }
    
    const task = await createTask(token, {
      ...normalizedTask
    })

    if (!task) return

    addTaskInState(task);
    closeCardFunction();
  }
  
  
  return (
    <TaskInputCard
      closeCardFunction={closeCardFunction}
      setDate={setDate}
      setDescription={setDescription}
      setStatus={setStatus}
      setTitle={setTitle}
      onSubmit={handleCreateTask}
      cardText="Nova Tarefa"
      buttonText="Criar"
    />
  )
}

export default NewTaskCard