import React, {Component} from 'react';
import Todo from '../Components/Todo';
import {getTodos} from '../api/todos';
import {connect} from 'react-redux';
import {addTodo, removeTodo, initialize, toggleCompleted} from '../Store/actions/todos'
import '../Styles/TodoList.css'
import _ from 'lodash';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputData: '',
      filter: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  componentDidMount() {
    if (!this.props.initialized) {
      getTodos().then(res => {
        res.map(r => this.props.addTodo(r.title))
        this.props.initialize()
      })
    }
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
    const {filter} = this.state
    return (
      <div className="list-container">
        <div className="filter-container">
          <div className={`${filter === '' ? 'active-filter' : ''}`} onClick={() => this.setState({filter: ''})}>
            ALL
          </div>
          <div className={`${filter === 'completed' ? 'active-filter' : ''}`} onClick={() => this.setState({filter: 'completed'})}>
            COMPLETED
          </div>
          <div className={`${filter === 'active' ? 'active-filter' : ''}`} onClick={() => this.setState({filter: 'active'})}>
            ACTIVE
          </div>
        </div>
        <input className="input-todo" placeholder="New todo" value={this.state.inputData} autoFocus={true} 
          onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
        <div>
          {_.map(data, (todo, i) => {
            switch(filter) {
              case 'completed':
                if (!todo.completed) return;
                break;
              case 'active': 
                if (todo.completed) return;
                break;
              default: {}
            }
            return <Todo key={i} toggleCompleted={() => this.props.toggleCompleted(todo)} 
              removeTodo={() => this.props.removeTodo(todo)} todo={todo}/>
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  initialized: state.initialized,
  data: state.data,
})

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (title) => dispatch(addTodo(title)),
    removeTodo: (todo) => dispatch(removeTodo(todo)),
    initialize: () => dispatch(initialize()),
    toggleCompleted: (todo) => dispatch(toggleCompleted(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);