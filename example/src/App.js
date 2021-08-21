import React from 'react'

import { useMyHook } from 'use-delayed-loading'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
