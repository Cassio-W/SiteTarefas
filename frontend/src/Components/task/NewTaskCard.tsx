import { useState, type ChangeEvent } from "react"
import Card from "../core/Card.tsx"
import Input from "../core/Input.tsx"
import { createTask } from "../../services/tasks"
import Button from "../core/Button.tsx"
import { useNavigate } from "react-router-dom"
import Form from "../core/Form.tsx"
import type { TaskType } from "../../types/index.ts"
import type { StatusType } from "../../types/index.ts"

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

  async function handleCreateTask() {
    const token = localStorage.getItem('token')

    if (!token) {
      alert('Please Login or Register');
      navigate('/login')
      return console.log('Token error');
    }

    const normalizedTask = {
      title,
      description: description !== '' ? description : null,
      status,
      finalDate: finalDate !== '' ? finalDate : null
    }
    
    const task = await createTask(token, {
      ...normalizedTask
    })

    if (!task) return

    addTaskInState(task);
    closeCardFunction();
  }
  
  
  return (
    <div>
      <Card hasForm={true}>
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
          <select value={status} onChange={(e: ChangeEvent<HTMLSelectElement>) => {setStatus(e.target.value as StatusType)}}>
            <option value="Pendente">Pendente</option>
            <option value="Em_Andamento">Em Andamento</option>
            <option value="Concluido">Concluido</option>
          </select>
          <Input
            placeholder="Data"
            type="date"
            value={finalDate}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {setDate(e.target.value)}}
          />
          <Button text='Criar'/>
        </Form>
      </Card>
    </div>
  )
}

export default NewTaskCard