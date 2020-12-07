import React, {Component} from 'react';
import Todo from '../Components/Todo';
import {getTodos} from '../api/todos'
import '../Styles/TodoList.css'
import _ from 'lodash';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputData: '',
      data: [],
      lastId: 10,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  componentDidMount() {
    getTodos().then(res => {
      this.setState({data: res})
    })
  }

  handleChange(event) {
    this.setState({inputData: event.target.value})
  }

  handleKeyDown(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      event.preventDefault()
      let text = this.state.inputData.trim()
      let sample = {userId: 1, id: this.state.lastId + 1, title: text, completed: false}
      let temp = this.state.data
      temp.push(sample)
      this.setState({inputData: '', data: temp})
    }
  }

  removeTodo(todo) {
    let temp = this.state.data
    const index = temp.findIndex(d => d === todo)
    temp.splice(index, 1)
    this.setState({data: temp})
  }

  render () {
    const {data} = this.state
    return (
      <div className="list-container">
        <input className="input-todo" placeholder="New todo" value={this.state.inputData} autoFocus={true} 
          onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
        <div>
          {_.map(data, (todo, i) => {
            return <Todo key={i} removeTodo={() => this.removeTodo(data)} todo={todo}/>
          })}
        </div>
      </div>
    )
  }
}

export default TodoList