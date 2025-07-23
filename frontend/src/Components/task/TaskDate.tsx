type DateProp = {
  date: string;
}

function TaskDate({ date }: DateProp) {
  return(
    <div className="text-xl">{date}</div>
  )
}

export default TaskDate