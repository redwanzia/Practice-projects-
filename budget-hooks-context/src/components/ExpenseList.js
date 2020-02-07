import React from 'react'
import ExpenseItem from './ExpenseItem';
import {MdDelete} from 'react-icons/md'

const ExpenseList = ({expenses,handleDelete,handleEdit,clearItems}) => {
  return (
    <div>
    <ul className='list' >
      {expenses.map((expense) =>{        
      return <ExpenseItem
       key={expense.id}
      expense={expense}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
         />        
      })}
    </ul>

      {expenses.length>0  && <button 
        onClick={clearItems}
        className='btn'        
        >Clear Expenses
        <MdDelete className='btn-icon'/>
        </button>}
      
    </div>
  )
}

export default ExpenseList
