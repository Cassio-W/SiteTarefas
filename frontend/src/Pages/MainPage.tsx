import Task from "../components/task/Task.tsx"
import SideBar from "../components/sidebar/sidebar.tsx"
import NewTaskCard from "../components/task/NewTaskCard.tsx"
import { useState } from "react"


function MainPage() {
  const [isCreatingNewTask = false, setCreatingNewTask] = useState(Boolean)
  
  return (
    <>
    <div className="flex">
      <div className="sidebar w-1/3 border h-full">
        <SideBar/>
      </div>
      <div className="w-2/3 border m-10 p-10">
        <search>
          <form className="flex rounded-xl border mb-8 p-5 text-3xl">
            <input className="w-4/5" placeholder="Pesquisar"/>
            <button className="w-1/5 border rounded-xl py-2">Confirmar</button>
          </form>
        </search>
        
        <div className="tasks border static flex-col items-center justify-center">
          <button onClick={() => setCreatingNewTask(true)} className="absolute bottom-30 right-30 bg-gray-900 rounded-full px-4 py-2.5 items-center">+</button>
          <Task 
            title="Titulo"
            descricao=""
            statusId={1}
            date="data"
          />
          <Task 
            title="Titulo"
            descricao="teste descricao, teste descricao teste descricao, teste descricao"
            statusId={3}
            date="data"
          />
          <Task 
            title="Titulo"
            descricao="teste descricao, teste descricao teste descricao, teste descricao"
            statusId={2}
            date="data"
          />
          <Task 
            title="Titulo"
            descricao="teste descricao, teste descricao teste descricao, teste descricao"
            statusId={3}
            date="data"
          />
        </div>   

      </div>

      <div className="absolute w-full">
        {isCreatingNewTask && <NewTaskCard closeNewTaskCard={() => {setCreatingNewTask(false)}}/>}
      </div>


    </div>
      
    </>  
  )
}

export default MainPage