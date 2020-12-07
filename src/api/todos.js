import axios from 'axios'

export function getTodos() {
  return axios.get(`https://jsonplaceholder.typicode.com/todos`)
  .then(res => {
    const todos = res.data.slice(0,10)
    return todos
  }).catch(err => {
    console.error(err)
    return []
  })
}