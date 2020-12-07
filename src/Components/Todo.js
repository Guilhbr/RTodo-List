export default function Todo ({text, removeTodo}) {
  return (
    <div className="todo-container">
      <div className="todo-text">
        {text}
      </div>
      <div onClick={removeTodo} className="delete-text">
        X
      </div>
    </div>
  )
}
