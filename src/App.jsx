import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from'./components/First';
import Event from './components/handling events/Event';
import State from './components/handling events/State';
import Side from './components/handling events/Side';
function App() {
  
  return (
    <div>
    <First/>
    <Event/>
    <State/>
    <Side/>
    </div>
  )
}

export default App
