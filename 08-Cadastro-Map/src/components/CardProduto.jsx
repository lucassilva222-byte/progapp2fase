import './CardProduto.css'

function CardProduto(prop) {
    return (
        <div className="cont-card">
            <div className="imagem-produto">
                <img 
                    src={prop.p.imagem} 
                    alt={prop.p.nome} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
            </div>
            <h2>{prop.p.nome}</h2>
            <p>R$ {prop.p.preco.toFixed(2).replace(".", ",")}</p>
            <button 
                className= "btn-deletar"
                onClick={() => prop.onDeletar(prop.p.id)}>
                Deletar
                </button>
        </div>
    )
}

export default CardProduto