const initialState = {
  data: [],
  initialized: false,
  loading: false,
  error: null,
  currId: 0
}

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const title = action.payload
      const newId = state.currId + 1
      const todo = {
        userId: 1,
        id: newId,
        title,
        completed: false,
      }
      return {
        ...state,
        data: [...state.data, todo],
        currId: newId
      } 
    }
    case 'REMOVE_TODO': {
      const todo = action.payload
      const index = state.data.findIndex(d => d.title === todo.title && d.id === todo.id)
      return {
        ...state,
        data: [...state.data.slice(0, index), ...state.data.slice(index + 1)]
      }
    }
    case 'INITIALIZE': {
      return {
        ...state,
        initialized: true,
      }
    }
    case 'TOGGLE_COMPLETED': {
      const todo = action.payload
      let data = state.data.map(d => {
        if (d.id !== todo.id || d.title !== todo.title) {
          return d;
        } 
        return {
          ...d,
          completed: !d.completed
        }
      })
      return {...state, data}
    }
    case 'GET_TODOS_CALL': {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case 'GET_TODOS_SUCCESS': {
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
        initialized: true,
      }
    }
    case 'GET_TODOS_ERROR': {
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      }
    }
    default:
      return state
  }
}