import React from 'react'
import './CardProduto.css'

function CardProduto(prop) {  
  return (
    <div className="cont-card">
    <p className= "imagem-produto">{prop.p.imagem}</p>
    <h2>{prop.p.nome}</h2>
  {/*<p>R${prop.p.preco.toFixed(2)}</p>}  com ponto */}
    <p>R${prop.p.preco.toFixed(2).replace(".",",")}</p>  {/* "replace" da esquerda é oque seja retirado, 
    da direita é oq seja colocado no lugar//// toFixed casas decimais apos a virgula no caso ali 2 casas*/} 
    
      
    </div>
  )
}

export default CardProduto
