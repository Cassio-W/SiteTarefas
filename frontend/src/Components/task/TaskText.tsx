type TextProp = {
  title: string;
  descricao: string;
}

function TaskText({ title, descricao }: TextProp) {
  return(
    <>
      <div className="flex flex-col gap-2">
        <div className="text-3xl"><b>{title}</b></div>
        <div className="text-[#a4abb3] w-100">{descricao}</div>
      </div>
    </>
  )
}

export default TaskText