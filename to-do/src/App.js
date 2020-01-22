import React from 'react';

import uuid from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'

import ToDoInput from './components/toDoList/ToDoInput'
import ToDoList from './components/toDoList/ToDoList'
import ToDoItem from './components/toDoList/ToDoItem'


import './App.css';

function App() {
  return (
    <div className="App">
      <ToDoInput/>      
      <ToDoList/>
      <h1>hello</h1>
    </div>
  );
}

export default App;
