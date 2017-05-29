import React, { Component } from 'react'
import ShoppingListContainer from './shopping-list/ShoppingListContainer'
import SearchFieldContainer from './search/SearchFieldContainer'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchFieldContainer />
        <ShoppingListContainer />
      </div>
    )
  }
}

export default App
