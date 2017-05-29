import React from 'react'
import PropTypes from 'prop-types'

//import './SearchField.css'



const SearchField = ({ text, onSearch }) => {
  let input
  return (
    <div>
      <style>{text.length > 0 ? `
        .ShoppingList li:not([data-search*="${text}"]) {
          display: none;
        }
      ` : ''}</style>

      <form onSubmit={e => {
        e.preventDefault()
        onSearch(input.value)
      }}>
        Search text:
        <input type="text" ref={elm => {
          input = elm
        }} />
        <button type="submit">Go</button>
      </form>
    </div>
  )
}



SearchField.propTypes = {
  text: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired
}

export default SearchField
