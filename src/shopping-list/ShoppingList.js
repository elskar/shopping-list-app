import React from 'react'
import PropTypes from 'prop-types'

import './ShoppingList.css'






const ShoppingList = ({ items, onTickItem }) => (
  <ul className="ShoppingList">
    {items.map( (item, index) =>
      <li
        key={index}
        className={item.tickedOff ? 'ticked-off' : ''}
        onClick={() => onTickItem(item.id)}
      >
        {item.text}
      </li>
    )}
  </ul>
)




ShoppingList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }))
  // todos: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   completed: PropTypes.bool.isRequired,
  //   text: PropTypes.string.isRequired
  // }).isRequired).isRequired,
  // onTodoClick: PropTypes.func.isRequired
}

export default ShoppingList
