import { combineReducers } from 'redux'

import { shoppingList } from '../shopping-list/reducers'
import { search } from '../search/reducers'


const shoppingListApp = combineReducers({
  shoppingList,
  search
})

export default shoppingListApp
