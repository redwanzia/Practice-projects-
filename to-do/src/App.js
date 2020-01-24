import React, { Component } from 'react'

import uuid from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'

import ToDoInput from './components/toDoList/ToDoInput'
import ToDoList from './components/toDoList/ToDoList'



import './App.css';



 class App extends Component {

  state = {

    items:[],
    id: uuid(),
    item:'', 
    editItem: false
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

})

}
handleDelete = (id) => {

    const filterItems = this.state.items.filter(item =>item.id !==id)
    this.setState({
      items: filterItems
    })
}

clearList = () => {
  this.setState({
    items:[]
  })  
 }

handleEdit = (id) => {

  const filterItems = this.state.items.filter(item =>item.id !==id)
  const selectedItem = this.state.items.find(item =>item.id===id)
  this.setState({
    items: filterItems,
    item: selectedItem.title,
    id: id,
    editItem:true
  })
}
  render() {

    return (
      <div className="container">
        <div className='row' >
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className='text-capitalize text-center' >To Do Input</h3>
            <ToDoInput 
            item = {this.state.item} 
            handleChange={this.handleChange} 
            handleSubmit= {this.handleSubmit} 
            editItem={this.state.editItem}/>
            <ToDoList 
            items={this.state.items} 
            clearList={this.clearList} 
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



