import React, {useState, useEffect} from 'react';
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'
import uuid from 'uuid'
import './App.css';


// const initialExpenses = [

//   {id : uuid(), charge: 'rent', amount :1600 },
//   {id : uuid(), charge: 'car payment', amount :400 },
//   {id : uuid(), charge: 'credit card', amount :1200 }

// ]

const initialExpenses = localStorage.getItem('expenses')? JSON.parse(localStorage.getItem('expenses'))  :[]

function App() {
//************ state values *********/
// all expenses, add expenses  
  const [expenses,setExpenses] = useState(initialExpenses)  

  // single expense
  const [charge,setCharge] = useState('')

  // single amount
  const [amount,setAmount] = useState('')

  // Alert 
const [alert, setAlert] = useState({show:false})

// edit
const [edit, setEdit] = useState(false)
// edit Item(id)
const [id, setId]= useState(0)

//************ useEffect *********/
useEffect(() => {
  console.log('we called useEffect ')
  localStorage.setItem('expenses', JSON.stringify(expenses))
},[expenses])


//************ functionality *********/

const handleCharge = e => {  
  setCharge( e.target.value )
}
const handleAmount = e => {
  setAmount( e.target.value )
}

const handleAlert = ({type, text}) => {
setAlert({show: true, type, text})
setTimeout(() => {
setAlert({show: false})
},3000)
}

const clearItems = () => {
  setExpenses([])
  handleAlert({type:'danger', text:'all items deleted'})
}

const handleDelete=(id)=> {
 const tempItems = expenses.filter(item=> item.id !==id)
 setExpenses(tempItems)
 handleAlert({type:'danger', text:'item deleted'})
}

const handleEdit=(id)=> {
let expense = expenses.find(item=> item.id === id)
let {charge, amount} = expense
setCharge(charge)
setAmount(amount)
setEdit(true)
setId(id)
  
}

const handleSubmit = e => {
  e.preventDefault()
  if(charge !=='' && amount>0){

    if(edit){
      let tempExpenses= expenses.map(item=>{
        return item.id===id? {...item,charge,amount} :item
      })
      setExpenses(tempExpenses)
      setEdit(false)
      handleAlert({type:'success', text:'item edited'})

    }else{
      const singleExpense = {id: uuid(), amount:amount, charge:charge }
      setExpenses([...expenses,singleExpense])
      handleAlert({type:'success', text:'item added'})
    }
    setCharge('')
    setAmount('')
  }else{
    handleAlert({type:'danger', text:'please add valid items'})
    // add alert
  }


}
  return (
    <React.Fragment >  
        {alert.show && <Alert  type={alert.type} text={alert.text} />}
      <Alert/>
      <h1>Budget Calculator</h1>
      <main className='App' >
        <ExpenseForm 
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}  
          edit={edit}      
        />
        <ExpenseList 
        expenses={expenses}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        clearItems={clearItems}
        
        />
      </main>
      <h1>
        Total Spending: <span className='total' >
        ${expenses.reduce((acc,current) =>{
          return acc += parseInt (current.amount)

        },0)}
        </span>
      </h1>

    </React.Fragment>
  );
}

export default App;
