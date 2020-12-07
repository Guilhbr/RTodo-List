import './App.css';
import TodoList from './Pages/TodoList'
import { Provider } from 'react-redux'
import {store, persistor} from './Store/config'
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TodoList />
      </PersistGate>
    </Provider>
  );
}

export default App;
