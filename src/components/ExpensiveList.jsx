
import React, { useMemo, useCallback } from 'react'
import Item from './Item'

export default function ExpensiveList() {
  const items = useMemo(() => {
    return Array.from({ length: 1000 }, (_, i) => i)
  }, [])

  const handleClick = useCallback((i) => {
    console.log("Clicked", i)
  }, [])

  return (
    <div>
      <h2>Virtualized-like List (Simplified)</h2>
      {items.slice(0, 50).map(i => (
        <Item key={i} value={i} onClick={handleClick} />
      ))}
    </div>
  )
}
