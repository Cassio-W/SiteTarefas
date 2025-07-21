import TaskDate from "./TaskDate.tsx";
import TaskStatus from "./TaskStatus.tsx";
import TaskText from "./TaskText.tsx";

type TaskProps = {
  statusName: string
  title: string
  descricao: string
  date: string
}

function Task({ statusName, title, descricao, date }: TaskProps) {
  return(
    <div className="bg-gray-800 p-6 rounded-xl shadow-md w-full flex gap-10">
      <TaskStatus statusName={statusName}/>
      <TaskText title={title} descricao={descricao}/>
      <TaskDate date={date}/>
    </div>
  )
}

export default Task;