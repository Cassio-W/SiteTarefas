import "../../styles/status.css"

type StatusProp = {
  statusName: string
}

function TaskStatus({ statusName }: StatusProp) {
  let statusClass = "";
  
  switch (statusName) {
    case "Em Andamento": statusClass = "andamento"; break;
    case "Concluido": statusClass = "concluido"; break;
    default: break;
  }
  
  return(
    <>
      <div className="flex flex-col gap-2 justify-center items-center px-5">
        <div className={"bg-[#b4babf] p-10 rounded-full border-4 " + statusClass}></div>
        <div className="text-xl text-center">{statusName}</div>
      </div>   
    </>
  )
}

export default TaskStatus