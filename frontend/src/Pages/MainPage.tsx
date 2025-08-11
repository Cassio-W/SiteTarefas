import Task from "../components/task/Task.tsx"
import SideBar from "../components/sidebar/SideBar.tsx"
import NewTaskCard from "../components/task/NewTaskCard.tsx"
import { useEffect, useState } from "react"
import { findAllTasks } from "../services/tasks.ts"
import { useNavigate } from "react-router-dom"
import "../styles/index.css"
import DeleteTaskConfirmation from "../components/task/DeleteTaskConfirmation.tsx"
import { type TaskType } from "../types/type.ts"
import EditTaskCard from "../components/task/EditTaskCard.tsx"


function MainPage() {
  const [isCreatingNewTask, setCreatingNewTask] = useState(false)
  const [isDeletingTask, setDeletingTask] = useState(false)
  const [isEditingTask, setEditingTask] = useState(false)
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [tasksRender, setTasksRender] = useState<TaskType[]>([])
  const [taskId, setTaskId] = useState('')
  const [search, setSearch] = useState('')
  
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

  function updateTaskInState(taskUpdate: TaskType) {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        const updatedTask = taskUpdate;
        return updatedTask;
      }
      return task;
    }))
  }

  function getFilteredTasks() {
    if (!search) return console.log('Trying to search without search');
    
    
    const filteredTasks = tasks.filter(task => {
        return (
          task.description?.toLowerCase().includes(search.toLowerCase()) ||
          task.title.toLowerCase().includes(search.toLowerCase())
        )           
      }
    )

    return filteredTasks;
  }

  async function getAllTasks() {
    const token = localStorage.getItem('token') || ''
    const tasks = await findAllTasks(token);

    if(!tasks) {
      navigate('/login');
    }

    setTasks(tasks);

    return tasks;
  }

  async function renderTasks() {
    let tasksToRender;

    tasksToRender = await getAllTasks()
  
    if (search) {
      tasksToRender = getFilteredTasks()
    }

    if (!tasksToRender) return console.log('Erro ao renderizar tarefas');
    
    setTasksRender(tasksToRender);
  }
    

  useEffect(() => {
    renderTasks()
  }, [search, tasks])
  
  return (
    <div className="flex m-5 gap-10">
      <aside className="sidebar w-1/4 border">
        <SideBar/>
      </aside>
      <main className="w-3/4 border p-10 relative">
        <search>
          <form className="flex rounded-xl border mb-8 p-5 text-3xl">
            <input value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} className="w-4/5" placeholder="Pesquisar"/>
            {/* <button className="w-1/5 border rounded-xl py-2">Confirmar</button> */}
          </form>
        </search>
        <button onClick={() => setCreatingNewTask(true)} className="hover:cursor-pointer absolute bottom-5 right-5 bg-gray-900 rounded-full px-4 py-2.5 text-xl">+</button>      
        <section className="tasks-container flex-col items-center overflow-auto w-full h-150 inset-shadow-xs">
          {tasksRender.map(task => (
            <Task
              key={task.id}
              taskId={task.id}
              statusName={task.status}
              title={task.title}
              descricao={task.description}
              date={formatDate(task.finalDate)}
              openDeleteTaskConfirmation={() => {setDeletingTask(true)}}
              openEditingTaskCard={() => setEditingTask(true)}
              setTaskId={setTaskId}
            />
          ))}
        </section>         
      </main>

      <section className="hidden-cards absolute w-screen bg-black/50">
        {isCreatingNewTask && <NewTaskCard closeCardFunction={() => {setCreatingNewTask(false)}} addTaskInState={addTaskInState}/>}
        {isDeletingTask && <DeleteTaskConfirmation closeCardFunction={() => {setDeletingTask(false)}} taskId={taskId} deleteTaskFromState={deleteTaskFromState}/>}
        {isEditingTask && <EditTaskCard closeCardFunction={() => {setEditingTask(false)}} taskId={taskId} updateTaskInState={updateTaskInState}/>}
      </section>
    </div>
  )
}

export default MainPage