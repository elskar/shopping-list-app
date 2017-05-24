import { combineReducers } from 'redux'
import { shoppingList } from '../shopping-list/reducers'

const shoppingListApp = combineReducers({
  shoppingList
})

export default shoppingListApp
