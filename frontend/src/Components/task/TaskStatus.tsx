import "../../styles/status.css"

type StatusProp = {
  statusId: number;
}

function TaskStatus({ statusId }: StatusProp) {
  let statusTitle = 'Pendente';
  
  switch (statusId) {
    case 1: statusTitle = "Concluído"; break;
    case 2: statusTitle = "Em Andamento"; break;
    default: break;
  }
  
  return(
    <>
      <div className="flex flex-col gap-2 justify-center items-center w-35">
        <button className={"bg-[#b4babf] p-5 rounded-full border-4 hover:opacity-70  status-" + statusId}></button>
        <div className="text-xl text-center">{statusTitle}</div>
      </div>   
    </>
  )
}

export default TaskStatus