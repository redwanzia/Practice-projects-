
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'



const Person = ({img,name,job,children}) => {
const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`

  return(
    <article className='person' >
      <img src={url} alt="personImg"/>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}    
    </article>

  )
}


const PersonList = () =>{
  return(
    <section className='person-list' >
      <Person img='34' name ='John' job = 'Developer' />  
      <Person img='47' name ='Bob' job = 'Designer' > 
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ex.</p>
      </Person>  
      <Person img='24' name ='David' job = 'Artist' />  
    </section>
  )
}



ReactDOM.render(<PersonList></PersonList>,document.getElementById ('root'))