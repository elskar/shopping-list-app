import { SEARCH_ITEMS } from './actions'


const initialState = {
  searchText: ''
}

export function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ITEMS:
      return {
        searchText: action.text
      }

    default:
      return state
  }
}
