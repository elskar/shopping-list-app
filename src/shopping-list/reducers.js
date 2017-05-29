import { TICK_OFF_ITEM, ADD_ITEM, FETCHED_ITEMS } from './actions'


const initialState = [
  { id: 0, tickedOff: false, text: 'paprika' },
  { id: 1, tickedOff: false, text: 'vatten i burk' }
]

export function shoppingList(state = initialState, action) {
  switch (action.type) {
    case TICK_OFF_ITEM:
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            tickedOff: !item.tickedOff
          }
        }

        return item
      })

    case ADD_ITEM:
      return [
        ...state,
        {
          id: state.length,
          tickedOff: false,
          text: action.text
        }
      ]

    case FETCHED_ITEMS:
      const titles = action.items
        .map(item => ({
          id: state.length + item.id,
          tickedOff: false,
          text: item.title
        }))

      return [
        ...state,
        ...titles
      ]

    default:
      return state
  }
}
