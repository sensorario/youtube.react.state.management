import { useState } from 'react'
import './App.css'

// typing: un utente può fare un tentativo
// submitting: un utente ha premuto send
// success: l'utente ha indovinato

function App() {
  const [state, setState] = useState('typing')

  const submitFunction = () => {
    setState('submitting')
    const city = document.querySelector('#city').value
    document.querySelector('#city').value = ''
    setTimeout(() => {
      if (city === 'Cesena') {
        setState('success')
      } else {
        setState('typing')
      }
    }, 1500)
  }

  

  if (state === 'success')
    return <h1>Congratulazioni!!!</h1>

  return (
    <>
      <h1>In quale citta sono nato?</h1>
      <input disabled={state === 'submitting'} type="text" id='city' />
      <button disabled={state === 'submitting'} onClick={submitFunction}>send</button>
    </>
  )
}

export default App
