import React, { Component } from 'react'

import {Route,Switch} from 'react-router-dom'


import './App.css'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoomPage from './pages/SingleRoomPage'
import ErrorPage from './pages/Error'


import NavBar from './components/NavBar'




 class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <Switch>      
      <Route exact path='/' component={Home}/>
      <Route exact path='/rooms' component={Rooms}/>
      <Route exact path='/rooms/:slug' component={SingleRoomPage}/>
      <Route component ={ErrorPage}/>
      </Switch>


      </div>
    )
  }
}

export default App


