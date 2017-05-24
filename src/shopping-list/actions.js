
// constants

export const TICK_OFF_ITEM = 'TICK_OFF_ITEM'
export const ADD_ITEM = 'ADD_ITEM'



// action creators

export function tickOffItem(id) {
  return { type: TICK_OFF_ITEM, id }
}

export function addItem(text) {
  return { type: ADD_ITEM, text }
}
