import React, { Component } from 'react'

import uuid from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'

import ToDoInput from './components/toDoList/ToDoInput'
import ToDoList from './components/toDoList/ToDoList'
// import ToDoItem from './components/toDoList/ToDoItem'


import './App.css';



 class App extends Component {

  state = {

    items:[],
    id: uuid(),
    item:'', 
    edit: false
  }

handleChange = (event) => {
  this.setState({
    item: event.target.value
  })


}
handleSubmit = (event) => {
event.preventDefault()
const newItem ={
id: this.state.id,
title:this.state.item
}

const updatedItems =[...this.state.items,newItem];

this.setState({

items: updatedItems,
item:'',
id: uuid(),
editItem:false

}, 
(event)=>console.log(this.state))

}
handleDelete = (id) => {}
clearList = () => {}
handleEdit = (id) => {}



  render() {

    return (
      <div className="container">
        <div className='row' >
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className='text-capitalize text-center' >To Do Input</h3>
            <ToDoInput 
            items = {this.state.items} 
            handleChange={this.handleChange} 
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



