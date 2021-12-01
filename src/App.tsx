import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import TodoInput from './todoInput';
import { TodoList } from './todoList';
import { todoListDate } from './model/todo';
import { Actions } from './model/actions';

function App() {
  const [ todos, setTodos ] = useState(todoListDate);
  const todoSubmit = (value: any) => {
    setTodos([...todos, { ...value, isComplete: false, date: new Date().toLocaleString() }])
  }
  const onActions = (actions: Actions) => (id: string) => {
    switch(actions) {
      case Actions.COMPLETE:
        setTodos(todos.map(todo => {
          if(todo.id === id) {
            return { ...todo, isComplete: !todo.isComplete}
          }

          return todo;
        }));
        break;
      case Actions.DELETE:
        setTodos(todos.filter(todo => todo.id !== id));
        break;
    }
  }

  return (
    <div className="App">
      <header className="container header">
        <TodoInput value="todo input" onSubmit={todoSubmit} />
      </header>
      <div className="container content">
        <TodoList values={ todos } onActions={onActions} />
      </div>
    </div>
  );
}

export default App;
