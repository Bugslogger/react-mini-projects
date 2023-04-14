import { useState } from 'react';
import './App.css'
// import Counter from './components/redux-toolkit/ui/counter/Counter';
import Counter from './components/no-redux/counter/Counter';

function App() {

  return (
    <div className="App">
      {/* no redux component */}
      <Counter />
      {/* redux component */}
      {/* <Counter /> */}
    </div>
  )
}

export default App
