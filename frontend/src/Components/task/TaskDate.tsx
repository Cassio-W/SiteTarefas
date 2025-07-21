type DateProp = {
  date: string;
}

function TaskDate({ date }: DateProp) {
  return(
    <div>{date}</div>
  )
}

export default TaskDate