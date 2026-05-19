import './Cavalo.css'

function Cavalo({c}) { 
    const {id, nome, raca, idade, pelagem} = c
    return (
        <div className="cont-cavalo">
            <span>{nome} |</span>
            <span>{raca} |</span>
            <span>{idade} ano{idade > 1 && <label>s</label>} |</span>
            <strong>{pelagem}</strong>
        </div>
    )
}

export default Cavalo
