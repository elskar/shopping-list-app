import { connect } from 'react-redux'
import SearchField from './SearchField'
import { searchItems } from './actions'


const mapStateToProps = (state) => {
  return {
    text: state.search.searchText
    // todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (text) => {
      dispatch(searchItems(text))
    }
  }
}


const SearchFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchField)

export default SearchFieldContainer
