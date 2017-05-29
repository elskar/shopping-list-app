import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import shoppingListApp from './reducers/shoppingListApp'

import createSagaMiddleware from 'redux-saga'
import { fetchItemsSaga } from './shopping-list/sagas'

import './index.css'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  shoppingListApp,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(fetchItemsSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
