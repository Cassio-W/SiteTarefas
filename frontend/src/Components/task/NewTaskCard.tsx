import { useState, type ChangeEvent, type HTMLElementType } from "react"
import AuthCard from "../auth/AuthCard"
import Input from "../auth/AuthInput"
import { create } from "../../services/tasks"
import AuthButton from "../auth/AuthButton.tsx"

type NewTaskProp = {
  closeNewTaskCard: () => void
}

function NewTaskCard({closeNewTaskCard}: NewTaskProp) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')
  const [date, setDate] = useState('')

  function handleCreateTask() {
    create({
      title,
      description,
      status,
      date,
    })
  }
  
  
  return (
    <div>
      <AuthCard onSubmit={handleCreateTask}>
        <div onClick={closeNewTaskCard} className="text-red-400 absolute top-0 right-3 text-5xl">x</div>
        <h1 className="p-5">Nova Tarefa</h1>
        <Input
          placeholder="Titulo"
          type="text"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {setTitle(e.target.value)}}
          autoComplete=""
        />
        <Input
          placeholder="Descricao"
          type="text"
          value={description}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {setDescription(e.target.value)}}
          autoComplete=""
        />
        <Input
          placeholder="Status"
          type="text"
          value={status}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {setStatus(e.target.value)}}
          autoComplete=""
        />
        <Input
          placeholder="Data"
          type="date"
          value={date}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {setDate(e.target.value)}}
          autoComplete=""
        />

        <AuthButton/>
      </AuthCard>
    </div>
  )
}

export default NewTaskCard