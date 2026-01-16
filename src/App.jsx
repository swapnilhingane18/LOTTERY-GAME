import { useState } from 'react'
import Lottery from './Lottery.jsx'
import TicketNumber from './TicketNumber.jsx' 

function App() {

  return (
    <div className="number-box">
      <TicketNumber num={5}/>
      <Lottery />
    </div>
  )
}

export default App