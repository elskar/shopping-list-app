
// constants

export const SEARCH_ITEMS = 'SEARCH_ITEMS'



// action creators

export function searchItems(text) {
  return { type: SEARCH_ITEMS, text }
}
