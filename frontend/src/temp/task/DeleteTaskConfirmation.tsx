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
    <Card extraClasses="">
      <div className="text-3xl mb-5">Deseja deletar essa tarefa?</div>
      <div className="buttons-container flex gap-10 justify-center">
        <button onClick={closeCardFunction} className="button-default w-30">
          Cancelar
        </button>
        <button onClick={() => {closeCardFunction(); handleDeleteTask(taskId); deleteTaskFromState()}} className="button-default !bg-red-500 w-30">
          Deletar
        </button>
      </div>
    </Card>
  )
}

export default DeleteTaskConfirmation