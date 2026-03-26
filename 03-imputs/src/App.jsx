import { useState } from 'react'
import './App.css'

function App() {
  const[inputNome, setInputNome] = useState("")

  function cadastrar(){
    console.log("Cadastrando: " + inputNome)

  }
  return (
    <>
    <h1>inputs controlados</h1>
    nome<input type="text"
    value={inputNome}
    onChange={(e) => setInputNome(e.target.value)}
    />
    <button onClick={cadastrar}>Cadastrar</button> 
    </>
  )
}

export default App
