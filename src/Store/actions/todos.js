export const addTodo = (title) => ({
  type: 'ADD_TODO',
  payload: title
});

export const removeTodo = (todo) => ({
  type: 'REMOVE_TODO',
  payload: todo
});

export const initialize = () => ({
  type: 'INITIALIZE',
})

export const toggleCompleted = (todo) => ({
  type: 'TOGGLE_COMPLETED',
  payload: todo
})

export const getTodosCall = () => ({
  type: 'GET_TODOS_CALL',
})

export const getTodosSuccess = (todos) => ({
  type: 'GET_TODOS_SUCCESS',
  payload: todos,
})

export const getTodosError = (error) => ({
  type: 'GET_TODOS_ERROR',
  payload: error,
})