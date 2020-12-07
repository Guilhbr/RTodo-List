const initialState = {
  data: [],
  initialized: false,
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
      return {
        ...state,
        data: state.data.filter(d => d.title !== todo.title),
      }
    }
    case 'INITIALIZE': {
      return {
        ...state,
        initialized: true,
      }
    }
    default:
      return state
  }
}