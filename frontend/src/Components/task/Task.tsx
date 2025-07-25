import TaskDate from "./TaskDate.tsx";
import TaskStatus from "./TaskStatus.tsx";
import TaskText from "./TaskText.tsx";

type TaskProps = {
  taskId: string;
  statusId?: number;
  title: string;
  descricao?: string;
  date?: string;
  openDeleteTaskConfirmation: () => void
  setTaskId: (response: string) => void
}

function Task({ taskId, statusId = 0, title, descricao = '', date = '', openDeleteTaskConfirmation, setTaskId }: TaskProps) {
  return(
    <div className="bg-gray-800 p-6 rounded-xl shadow-md h-35 flex gap-10 my-3 border w-full" id={taskId}>
      <TaskStatus statusId={statusId}/>
      <TaskText title={title} descricao={descricao}/>
      <div className="left-container flex flex-col w-1/6 gap-3">
        <TaskDate date={date}/>
        <div className="relative buttons flex justify-center gap-5">
          <button className="button-default !bg-red-500">
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