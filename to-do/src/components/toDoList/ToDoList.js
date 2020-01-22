import React, { Component } from 'react'

import  ToDoItem  from './ToDoItem';

 class ToDoList extends Component {
  render() {

    const {items, clearList,handleEdit,handleDelete} =this.props


    return (
      <ul className='list-group my-5' >
        <h3 className='text-capitalize text-center' >To do list</h3>
        {items.map(item =>{return(<ToDoItem 
          key={item.id} 
          title={item.title} 
          handleEdit={handleEdit} 
          handleDelete={ ()=>handleDelete(item.id)} 
          handleEdit={ ()=> handleEdit(item.id)} />
          )})}
          
          <button 
          type='button' 
          className='btn btn-danger btn-block mt-5, text-capitalize'
          onClick={clearList}>Clear 
          </button>

      </ul>
    )
  }
}

export default ToDoList
