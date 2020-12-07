import React, {Component} from 'react';
import Todo from '../Components/Todo';
import {getTodos} from '../api/todos';
import {connect} from 'react-redux';
import {addTodo, removeTodo} from '../Store/actions/todos'
import '../Styles/TodoList.css'
import _ from 'lodash';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputData: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  componentDidMount() {
    getTodos().then(res => {
      res.map(r => this.props.addTodo(r.title))
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.data.length !== prevProps.data.length) {
      this.setState({data: this.props.data})
    }
  }

  handleChange(event) {
    this.setState({inputData: event.target.value})
  }

  handleKeyDown(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      event.preventDefault()
      let text = this.state.inputData.trim()
      this.props.addTodo(text)
      this.setState({inputData: ''})
    }
  }

  render () {
    const {data} = this.props
    return (
      <div className="list-container">
        <input className="input-todo" placeholder="New todo" value={this.state.inputData} autoFocus={true} 
          onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
        <div>
          {_.map(data, (todo, i) => {
            return <Todo key={i} removeTodo={() => this.props.removeTodo(todo)} todo={todo}/>
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data,
})

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (title) => dispatch(addTodo(title)),
    removeTodo: (todo) => dispatch(removeTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);