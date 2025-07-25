import { deleteTask } from "../../services/tasks"
import Card from "../core/Card"

type DeleteTaskConfirmationProp = {
  closeCardFunction: () => void
  taskId: string
  deleteTaskFromState: () => void
}

function handleDeleteTask(taskId: string) {
  const token = localStorage.getItem('token')

  if (!token) return console.log('Sem Token');

  deleteTask(token, taskId)
  
}

function DeleteTaskConfirmation({ closeCardFunction, taskId, deleteTaskFromState }: DeleteTaskConfirmationProp) {
  return(
    <Card extraClasses="gap-5">
      <div className="text-3xl">Deseja deletar essa tarefa?</div>
      <button onClick={closeCardFunction} className="button-default">
        Cancelar
      </button>
      <button onClick={() => {closeCardFunction(); handleDeleteTask(taskId); deleteTaskFromState()}} className="button-default !bg-red-500">
        Deletar
      </button>
    </Card>
  )
}

export default DeleteTaskConfirmation