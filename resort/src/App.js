import React, { Component } from 'react'
import './App.css'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoomPage from './pages/SingleRoomPage'
import ErrorPage from './pages/Error'

import {Route,Switch} from 'react-router-dom'


 class App extends Component {
  render() {
    return (
      <div>

      <Route exact path='/' component={Home}/>
      <Route exact path='/rooms' component={Rooms}/>
      <Route exact path='/rooms/:slug' component={SingleRoomPage}/>


      </div>
    )
  }
}

export default App


