import type { ChangeEvent } from "react"
import type { StatusType, ValuesType } from "../../types/type"
import Card from "../core/Card"
import Input from "../core/Input"
import Form from "../core/Form"

type TaskInputProps = {
  closeCardFunction: () => void
  setTitle: (response: string) => void
  setDescription: (response: string) => void
  setStatus: (response: StatusType) => void
  setDate: (response: string) => void
  onSubmit: () => void
  buttonText: string
  values?: ValuesType
  cardText: string
}

function TaskInputCard({ closeCardFunction, setTitle, setDate, setStatus, setDescription, onSubmit, buttonText, values, cardText }: TaskInputProps) {
  return (
    <Card>
      <Form onSubmit={onSubmit}>
        <div onClick={closeCardFunction} className="hover:cursor-pointer text-red-400 absolute top-[-20px] right-[-5px] text-5xl">x</div>
        <h1 className="p-5">{cardText}</h1>
        <Input
          placeholder="Titulo *"
          type="text"
          value={values?.title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {setTitle(e.target.value)}}
        />
        <Input
          placeholder="Descricao"
          type="text"
          value={values?.description}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {setDescription(e.target.value)}}
        />
        <select 
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {setStatus(e.target.value as StatusType)}}
          className="bg-blue-500 border-2 rounded-md p-3 w-4/5 hover:opacity-70 duration-300 ease-out"
          value={values?.status}
        >
          <option className="bg-gray-500" value="Pendente">Pendente</option>
          <option className="bg-orange-500" value="Em_Andamento">Em Andamento</option>
          <option className="bg-cyan-500" value="Concluido">Concluido</option>
        </select>
        <Input
          placeholder="Data"
          type="date"
          value={values?.finalDate}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {setDate(e.target.value)}}
        />
        <button className="button-default !bg-green-500" type="submit">
          {buttonText}
        </button>
      </Form>
    </Card>
  )
}

export default TaskInputCard