export default function Todo ({todo, removeTodo}) {
  console.log(todo)
  return (
    <div className="todo-container">
      <div className="todo-text">
        {todo.title}
      </div>
      <div onClick={removeTodo} className="delete-text">
        X
      </div>
    </div>
  )
}
