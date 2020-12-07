import React, {Component} from 'react';
import Todo from '../Components/Todo';
import _ from 'lodash';

let mockData = ['hello', 'test', 'another', 'just', 'testing']

class TodoList extends Component {
  render () {
    return (
      <div className="App">
        {_.map(mockData, data => {
          return <Todo text={data}/>
        })}
      </div>
    )
  }
}

export default TodoList