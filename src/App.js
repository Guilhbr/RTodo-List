import './App.css';
import TodoList from './Pages/TodoList'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './Store/reducers/'

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
