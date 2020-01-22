import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'





 class Form extends Component {

state = {

  firstName: '',
  lastName: '',
  people: []

}

  render() {
    return (
<section>
      <article>
        <form >
        <input type="text" name="firstName"/>
        <input type="text" name="lastName"/>
        <button type='submit' >Submit</button>
          </form>
      </article>
      <article>
        <h1>People</h1>
        <div>{this.state.people}</div>
      
      </article>


</section>
    )
  }
}









class App extends Component {
	render() {
		return <Form/>
	}
}

export default App;
