import React, { Component } from 'react'

import uuid from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'

import ToDoInput from './components/toDoList/ToDoInput'
import ToDoList from './components/toDoList/ToDoList'
import ToDoItem from './components/toDoList/ToDoItem'


import './App.css';



 class App extends Component {

  state = {

    item:[{id:1, title:'wake up'},{id:2, title:'make breakfast'}],
    id: uuid(),
    item:'', 
    edit: false
  }

handleChange = (event) => {console.log('handlechange')}
handleSubmit = (event) => {console.log('handleSubmit')}
handleDelete = (id) => {console.log('handleDelete')}
clearList = () => {console.log('clearList')}
handleEdit = (id) => {console.log('handleEdit')}
handleSubmit = (event) => {console.log('handleSubmit')}


  render() {
    console.log(this.state)
    return (
      <div className="container">
        <div className='row' >
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className='text-capitalize text-center' >To Do Input</h3>
            <ToDoInput 
            item = {this.state.item} 
            handleChange={this.state.handleChange} 
            handleSubmit= {this.handleSubmit} 
            editItem={this.state.editItem}/>
            <ToDoList 
            items={this.state.items} 
            clearList={this.state.clearList} 
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            />
          </div>
        </div>

      
      </div>
    )
  }
}

export default App



