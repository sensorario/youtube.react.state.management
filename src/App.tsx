import { useState } from 'react'
import './App.css'

// typing: un utente può fare un tentativo
// submitting: un utente ha premuto send
// success: l'utente ha indovinato

function App() {
  const [state, setState] = useState('typing')

  const handleInput = (e) => {
    const city = e.target.value
    if (city === 'Cesena') {
      setState('success')
    }
  }

  if (state === 'success')
    return <h1>Congratulazioni!!!</h1>

  return (
    <>
      <h1>In quale citta sono nato?</h1>
      <input disabled={state === 'submitting'} onChange={handleInput} type="text" id='city' />
    </>
  )
}

export default App
