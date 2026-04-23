
import React, { Suspense, useState } from 'react'
import ExpensiveList from './components/ExpensiveList'
const LazyComponent = React.lazy(() => import('./components/LazyComponent'))

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: 20 }}>
      <h1>React Performance Optimization Demo</h1>

      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>

      <ExpensiveList />

      <Suspense fallback={<p>Loading...</p>}>
        <LazyComponent />
      </Suspense>
    </div>
  )
}
