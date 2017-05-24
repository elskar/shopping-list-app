import React, { Component } from 'react'
import ShoppingListContainer from './shopping-list/ShoppingListContainer'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingListContainer />
      </div>
    )
  }
}

export default App
