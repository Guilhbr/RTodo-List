export const addTodo = (title) => ({
  type: 'ADD_TODO',
  payload: title
});

export const removeTodo = (todo) => ({
  type: 'REMOVE_TODO',
  payload: todo
});