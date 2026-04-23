
import React from 'react'

function Item({ value, onClick }) {
  console.log("Render Item", value)
  return (
    <div onClick={() => onClick(value)}>
      Item {value}
    </div>
  )
}

export default React.memo(Item)
