import { useState, type ChangeEvent } from "react"
import Card from "../core/Card.tsx"
import Input from "../core/Input.tsx"
import { createTask } from "../../services/tasks"
import { useNavigate } from "react-router-dom"
import Form from "../core/Form.tsx"
import type { TaskType } from "../../types/type.ts"
import type { StatusType } from "../../types/type.ts"

type NewTaskProp = {
  closeCardFunction: () => void
  addTaskInState: (response: TaskType) => void
}



function NewTaskCard({ closeCardFunction, addTaskInState }: NewTaskProp) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState<StatusType>('Pendente')
  const [finalDate, setDate] = useState('')

  const navigate = useNavigate()

  function getISOStringDate() {
    const date = new Date(finalDate);
    date.setHours(24);
    return date.toISOString();
  }

  async function handleCreateTask() {
    const token = localStorage.getItem('token')

    if (!token) {
      alert('Please Login or Register');
      navigate('/login')
      return console.log('Token error');
    }

    const ISOStringDate = getISOStringDate()

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
      <Card>
        <Form onSubmit={handleCreateTask}>
          <div onClick={closeCardFunction} className="text-red-400 absolute top-[-20px] right-[-5px] text-5xl">x</div>
          <h1 className="p-5">Nova Tarefa</h1>
          <Input
            placeholder="Titulo *"
            type="text"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {setTitle(e.target.value)}}
          />
          <Input
            placeholder="Descricao"
            type="text"
            value={description}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {setDescription(e.target.value)}}
          />
          <select 
          value={status} 
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {setStatus(e.target.value as StatusType)}}
          className="bg-blue-500 border-2 rounded-md p-3 w-4/5 hover:opacity-70 duration-300 ease-out"
          >
            <option className="bg-gray-500" value="Pendente">Pendente</option>
            <option className="bg-orange-500" value="Em_Andamento">Em Andamento</option>
            <option className="bg-cyan-500" value="Concluido">Concluido</option>
          </select>
          <Input
            placeholder="Data"
            type="date"
            value={finalDate}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {setDate(e.target.value)}}
          />
          <button className="button-default" type="submit">
            Criar
          </button>
        </Form>
      </Card>
  )
}

export default NewTaskCard