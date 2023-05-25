import React from 'react'

export default function App() {
  const debugScreens = import.meta.env.DEV ? 'debug-screens' : ''

  return (
    <div id="App" className={`fixed top-0 left-0 flex flex-col w-full h-full overflow-auto WRAPPER ${debugScreens}`}>
      <h1 className="text-custom p-5 uppercase">тхри жиэсс</h1>
    </div>
  )
}
