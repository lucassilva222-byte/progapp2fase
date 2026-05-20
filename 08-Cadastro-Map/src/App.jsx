import { useState } from 'react'
import './App.css'
import CardProduto from './components/CardProduto';

function App() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: 'lander/2022',
      preco: 19999.99,
      imagem: 'https://2.bp.blogspot.com/-3pBE6B0Yt_g/XDss8eXFRPI/AAAAAAAARbg/hvmtS57IiNsqO7Vm_igyvTpAfcWg049KgCLcBGAs/s1600/yamaha-Lander-XTZ-250-ABS-2020%2B%252812%2529.jpg',
    },
    {
      id: 2,
      nome: 'cg/2014',
      preco: 9999.90,
      imagem: 'https://th.bing.com/th/id/R.46f19e6016d01d36e5c848eaa1a1a383?rik=vJryf1VUz%2fP14A&pid=ImgRaw&r=0',
    }
  ]);

  const [inputImagem, setInputImagem] = useState('')
  const [inputNome, setInputNome] = useState('')
  const [inputPreco, setInputPreco] = useState('')

  function cadastrar() {
    if (!inputNome || !inputPreco || !inputImagem) return alert("Preencha todos os campos"); 
    // "!"" é negando esse if serve para as pessoas preencherem todos os campos
    
    let produtoNovo = { 
      id: Date.now(), 
      nome: inputNome, 
      preco: Number(inputPreco), 
      imagem: inputImagem 
    }
    
    setProdutos([...produtos, produtoNovo])
    setInputImagem('')
    setInputNome('')
    setInputPreco('')
  }

  function deletar(id) {
    const listaFiltrada = produtos.filter(produto => produto.id !== id)
    setProdutos(listaFiltrada)

  }

  return (
    <div className="container-principal">
      <h1 className='h1-card'>Motors store</h1>

      <div className="cont-form">
        <h1>Cadastro</h1>
        <div className="input-container">
          <label>URL da Imagem</label>
          <input type="text" value={inputImagem} onChange={(e) => setInputImagem(e.target.value)} placeholder="http://..." />
        </div>
        <div className="input-container">
          <label>Nome</label>
          <input type="text" value={inputNome} onChange={(e) => setInputNome(e.target.value)} placeholder='Digite o modelo/ano'/>
        </div>
        <div className="input-container">
          <label>Preço</label>
          <input type="number" value={inputPreco} onChange={(e) => setInputPreco(e.target.value)} />
        </div>
        <button className="btn-cadastro" onClick={cadastrar}>Cadastrar</button>
      </div>

      <div className="listaCards">
        {produtos.map((produto) => (
          <CardProduto p={produto} key={produto.id} onDeleter={deletar}/>
        ))}
      </div>
    </div>
  )
}

export default App