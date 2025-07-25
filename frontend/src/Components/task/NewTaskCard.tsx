import { useState, type ChangeEvent } from "react"
import Card from "../core/Card.tsx"
import Input from "../core/Input.tsx"
import { createTask } from "../../services/tasks"
import Button from "../core/Button.tsx"
import { useNavigate } from "react-router-dom"
import Form from "../core/Form.tsx"

type NewTaskProp = {
  closeCardFunction: () => void
}



function NewTaskCard({closeCardFunction}: NewTaskProp) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')
  const [date, setDate] = useState('')

  const navigate = useNavigate()

  async function handleCreateTask() {
    const token = await localStorage.getItem('token')
    

    if (!token) {
      await alert('Please Login or Register');
      navigate('/login')
      return console.log('Token error');
    }
    
    
    await createTask(token, {
      title,
      description,
      status,
      date,
    })
    alert('Tarefa Criada')
  }
  
  
  return (
    <div>
      <Card>
        <Form onSubmit={handleCreateTask}>
          <div onClick={closeCardFunction} className="text-red-400 absolute top-0 right-3 text-5xl">x</div>
          <h1 className="p-5">Nova Tarefa</h1>
          <Input
            placeholder="Titulo"
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
          <Input
            placeholder="Status"
            type="text"
            value={status}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {setStatus(e.target.value)}}
          />
          <Input
            placeholder="Data"
            type="date"
            value={date}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {setDate(e.target.value)}}
          />
          <Button text='Criar'/>
        </Form>
      </Card>
    </div>
  )
}

export default NewTaskCard