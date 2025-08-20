type TextProp = {
  title: string;
  descricao: string;
}

function TaskText({ title, descricao }: TextProp) {
  return(
    <>
      <div className="flex flex-col gap-2 w-4/6">
        <div className="text-2xl"><b>{title}</b></div>
        <div className="text-[#a4abb3] w-100">{descricao}</div>
      </div>
    </>
  )
}

export default TaskText