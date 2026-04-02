
import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import Contato from './pages/Contato';
import Produtos from './pages/Produtos';
import Espetinho from './pages/Espetinho';
import Hotdog from './pages/Hotdog';
import Xdovava from './pages/Xdovava';

function App() {
  const[tela, setTela] = useState(<Home />)

  return (
    <div className="cont-app">
    <header className={'cont-header'}>
    <nav>
      <ul>
        <button className={'botoes-nav'} onClick={() => setTela(<Hotdog/>)}>hotdog do biru</button>
        <button className={'botoes-nav'} onClick={() => setTela(<Xdovava/>)}>x do vava</button>
        <button className={'botoes-nav'} onClick={() => setTela(<Espetinho/>)}>Espetinho do galego</button>
      </ul>
    </nav>
    </header>
    <main className= {`cont-main`}>
    {tela}
    </main>

    </div>

  )
}

export default App
