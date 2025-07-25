type DateProp = {
  date?: string;
}

function TaskDate({ date = "" }: DateProp) {
  return(
    <div className="text-xl justify-end flex">{date}</div>
  )
}

export default TaskDate