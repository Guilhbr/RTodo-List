import axios from 'axios'
import {getTodosCall, getTodosSuccess, getTodosError} from '../Store/actions/todos'

function handleErrors(response) {
  console.log(response)
  if (response.status !== 200) {
    throw Error(response.statusText);
  }
  return response;
}

export function getTodos() {
  return dispatch => {
    dispatch(getTodosCall)
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
      .then(handleErrors)
      .then(res => {
        const todos = res.data.slice(0,10)
        dispatch(getTodosSuccess(todos))
      }).catch(err => {
        dispatch(getTodosError(err))
        console.error(err)
      })
  }
}