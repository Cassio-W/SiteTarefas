import Task from "../components/task/Task.tsx"
import SideBar from "../components/sidebar/SideBar.tsx"
import NewTaskCard from "../components/task/NewTaskCard.tsx"
import { useEffect, useState } from "react"
import { findAllTasks } from "../services/tasks.ts"
import { useNavigate } from "react-router-dom"
import "../styles/index.css"
import DeleteTaskConfirmation from "../components/task/DeleteTaskConfirmation.tsx"
import type { TaskType } from "../types/index.ts"


function MainPage() {
  const [isCreatingNewTask = false, setCreatingNewTask] = useState(Boolean)
  const [isDeletingTask = false, setDeletingTask] = useState(Boolean)
  const [tasks = [], setTasks] = useState<TaskType[]>([])
  const [taskId, setTaskId] = useState('')
  
  const navigate = useNavigate()

  function formatDate(date: string) {
    if (!date) return
    
    const newDate = new Date(date)
    return newDate.toLocaleDateString("pt-BR", {month: 'short', day: '2-digit'})
  }

  function deleteTaskFromState() {
    setTasks(tasks => tasks.filter(task => task.id !== taskId))
  }

  function addTaskInState(task: TaskType) {
    setTasks(tasks => [...tasks, task])
  }

  async function getTasks() {
    const token = localStorage.getItem('token') || ''
    const tasks = await findAllTasks(token);

    if(!tasks) {
      navigate('/login');
    }

    setTasks(tasks);
  }
    

  useEffect(() => {
    getTasks();
  }, [])
  
  return (
    <>
    <div className="flex">
      <div className="sidebar w-1/3 border h-full">
        <SideBar/>
      </div>
      <div className="w-2/3 border m-10 p-10 relative">
        <search>
          <form className="flex rounded-xl border mb-8 p-5 text-3xl">
            <input className="w-4/5" placeholder="Pesquisar"/>
            <button className="w-1/5 border rounded-xl py-2">Confirmar</button>
          </form>
        </search>
        <button onClick={() => setCreatingNewTask(true)} className="absolute bottom-5 right-5 bg-gray-900 rounded-full px-4 py-2.5 text-xl">+</button>      
        <div className="tasks-container flex-col items-center overflow-auto w-full h-150 px-5 inset-shadow-xs">
          {tasks.map(task => (
            <Task
              key={task.id}
              taskId={task.id}
              statusName={task.status}
              title={task.title}
              descricao={task.description}
              date={formatDate(task.finalDate)}
              openDeleteTaskConfirmation={() => {setDeletingTask(true)}}
              setTaskId={setTaskId}
            />
          ))}
        </div>         
      </div>

      <div className="absolute w-full">
        {isCreatingNewTask && <NewTaskCard closeCardFunction={() => {setCreatingNewTask(false)}} addTaskInState={addTaskInState}/>}
        {isDeletingTask && <DeleteTaskConfirmation closeCardFunction={() => {setDeletingTask(false)}} taskId={taskId} deleteTaskFromState={deleteTaskFromState}/>}
      </div>


    </div>
      
    </>  
  )
}

export default MainPage