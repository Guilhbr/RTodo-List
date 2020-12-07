import React, {Component} from 'react';
import Todo from '../Components/Todo';
import '../Styles/TodoList.css'
import _ from 'lodash';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputData: '',
      mockData: ['hello', 'test', 'another', 'just', 'testing']
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleChange(event) {
    this.setState({inputData: event.target.value})
  }

  handleKeyDown(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      event.preventDefault()
      let text = this.state.inputData.trim()
      let data = this.state.mockData
      data.push(text)
      this.setState({inputData: '', mockData: data})
    }
  }

  removeTodo(data) {
    let mock = this.state.mockData
    const index = mock.findIndex(d => d === data)
    mock.splice(index, 1)
    this.setState({mockData: mock})
  }

  render () {
    const {mockData} = this.state
    return (
      <div className="list-container">
        <input className="input-todo" placeholder="New todo" value={this.state.inputData} autoFocus={true} 
          onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
        <div>
          {_.map(mockData, (data, i) => {
            return <Todo key={i} removeTodo={() => this.removeTodo(data)} text={data}/>
          })}
        </div>
      </div>
    )
  }
}

export default TodoList