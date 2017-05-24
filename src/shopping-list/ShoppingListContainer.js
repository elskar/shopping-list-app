import { connect } from 'react-redux'
import ShoppingList from './ShoppingList'
import { tickOffItem, addItem } from './actions'


const mapStateToProps = (state) => {
  return {
    items: state.shoppingList
    // todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onTickItem: (id) => {
      dispatch(tickOffItem(id))
    },
    onAddItem: (text) => {
      dispatch(addItem(text))
    }
  }
}


const ShoppingListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList)

export default ShoppingListContainer
