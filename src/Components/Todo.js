export default function Todo ({todo, removeTodo, toggleCompleted}) {
  return (
    <div className="todo-container">
      <div onClick={toggleCompleted} className={`todo-text ${todo.completed ? 'todo-completed' : ''}`}>
        {todo.title}
      </div>
      <div onClick={removeTodo} className="delete-text">
        X
      </div>
    </div>
  )
}
