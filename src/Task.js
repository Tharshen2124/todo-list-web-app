export default function Task(props) {

  return (
    <div
      style={{ color: props.completed ? "green" : "black" }}
    >
      <h1>{props.taskName}</h1>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  )
}


