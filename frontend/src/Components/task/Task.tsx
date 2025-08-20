import TaskDate from "./TaskDate";
import TaskStatus from "./TaskStatus";
import TaskText from "./TaskText";

type TaskProps = {
  taskId: string;
  statusName?: string;
  title: string;
  descricao?: string;
  date?: string;
  openDeleteTaskConfirmation: () => void
  openEditingTaskCard: () => void
  setTaskId: (response: string) => void
  
}

function Task({ taskId, statusName = '', title, descricao = '', date = '', openDeleteTaskConfirmation, openEditingTaskCard, setTaskId }: TaskProps) {
  function getStatusId(statusName: string) {
    let statusId = 0

    switch (statusName){
      case "Em_Andamento": statusId = 2; break;
      case "Concluido": statusId = 1; break;
      default: break;
    } 
      

    return statusId;
  }
  
  return(
    <div className="bg-gray-800 p-6 rounded-xl shadow-md h-35 flex gap-10 my-3 border w-full" id={taskId}>
      <TaskStatus statusId={getStatusId(statusName)}/>
      <TaskText title={title} descricao={descricao}/>
      <div className="left-container flex flex-col w-1/6 gap-3">
        <TaskDate date={date}/>
        <div className="relative buttons flex justify-center gap-5">
          <button onClick={() => {openEditingTaskCard(); setTaskId(taskId);}} className="button-default !bg-red-500">
            Edit
          </button>
          <button onClick={() => {openDeleteTaskConfirmation(); setTaskId(taskId);}} className="button-default !bg-red-500">         
            Del
          </button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Task;