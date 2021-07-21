import React from 'react'
import Mycounter from './components/Counter/Mycounter';
import CounterContextProvider from './context/CounterContext';
import { Header } from './stories/Header';
const App = () => {
  return (
    <div>
      <CounterContextProvider>
        <Header />
        <Mycounter />
      </CounterContextProvider>
    </div>
  )
}

export default App
