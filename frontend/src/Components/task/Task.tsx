import TaskDate from "./TaskDate.tsx";
import TaskStatus from "./TaskStatus.tsx";
import TaskText from "./TaskText.tsx";

type TaskProps = {
  statusId: number;
  title: string;
  descricao: string;
  date: string;
}

function Task({ statusId = 0, title, descricao = '', date = '' }: TaskProps) {
  return(
    <div className="bg-gray-800 p-6 rounded-xl shadow-md w-180 h-35 flex gap-10 my-3">
      <TaskStatus statusId={statusId}/>
      <TaskText title={title} descricao={descricao}/>
      <TaskDate date={date}/>
    </div>
  )
}

export default Task;