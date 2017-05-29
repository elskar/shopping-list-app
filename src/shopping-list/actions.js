
// constants

export const TICK_OFF_ITEM = 'TICK_OFF_ITEM'
export const ADD_ITEM = 'ADD_ITEM'
export const FETCH_ITEMS = 'FETCH_ITEMS'
export const FETCHED_ITEMS = 'FETCHED_ITEMS'



// action creators

export function tickOffItem(id) {
  return { type: TICK_OFF_ITEM, id }
}

export function addItem(text) {
  return { type: ADD_ITEM, text }
}

export function fetchItems() {
  return { type: FETCH_ITEMS }
}

export function fetchedItems(items) {
  return { type: FETCHED_ITEMS, items }
}
