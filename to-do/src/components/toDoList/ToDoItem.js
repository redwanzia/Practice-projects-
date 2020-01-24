import React, { Component } from 'react'

export class ToDoItem extends Component {
  render() {

    const {title,handleDelete, handleEdit} =this.props

    return <li className='list-group-item text-capitalize d-flex justify-content-between my-2' >
      
      <h6  >{title}</h6>
      <div  className="todo-icon">
        <span className='mx-2 text-success' onClick={handleEdit} >
          <i className='material-icons' >create</i>
        </span>

        <span className='mx-2 text-danger ' onClick={handleDelete} >
        <i className='material-icons' >delete</i>
      </span>

      </div>

      </li>
    
  }
}

export default ToDoItem
