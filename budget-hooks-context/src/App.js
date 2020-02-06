import React, {useState} from 'react';
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'
import uuid from 'uuid'
import './App.css';


const initialExpenses = [

  {id : uuid(), charge: 'rent', amount :1600 },
  {id : uuid(), charge: 'car payment', amount :400 },
  {id : uuid(), charge: 'credit card', amount :1200 }

]

function App() {
//************ state values *********/
// all expenses, add expenses  
  const [expenses,setExpenses] = useState(initialExpenses)  

  // single expense
  const [charge,setCharge] = useState('')

  // single amount
  const [amount,setAmount] = useState('')
//************ functionality *********/

const handleCharge = e => {  
  setCharge( e.target.value )
}
const handleAmount = e => {
  setAmount( e.target.value )
}
const handleSubmit = e => {
  e.preventDefault()
  if(charge !=='' && amount>0){
    const singleExpense = {id: uuid(), amount:amount, charge:charge }
    setExpenses([...expenses,singleExpense])
    setCharge('')
    setAmount('')
  


  }else{

    // add alert
  }


}
  return (
    <div >  
        
      <Alert/>
      <h1>Budget Calculator</h1>
      <main className='App' >
        <ExpenseForm 
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}        
        />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        Total Spending: <span className='total' >
        ${expenses.reduce((acc,current) =>{
          return acc += parseInt (current.amount)

        },0)}
        </span>
      </h1>

    </div>
  );
}

export default App;
