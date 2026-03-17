{/*Papai Noel está brincando com seus duendes para entretê-los durante a véspera do Natal. A brincadeira consiste nos elfos escreverem números em pedaços de papel e colocarem no gorro do Papai Noel. Após todos terminarem de colocar os números Noel sorteia um papel e aquele número representa quantos "Ho" o Noel deve falar.

Seu trabalho é ajudar o Papai Noel montando um problema que mostre todos os "Ho" que ele deve falar dado o número sorteado.

Entrada
A entrada é composta por um único inteiro N (0 < N ≤ 106) representando quantos "Ho" serão falados por Noel.

Saída
A saída é composta por todos "Ho" que Papai Noel deve falar separados por um espaço. Após o último "Ho" deve ser apresentado um "!" encerrando o programa.

*/
}
import { useState } from 'react'

function HoHoHo() {

    const [inputQuantHo, setInputQuantHo] = useState("VASCO")
    const [resultado, setResultado] = useState("")//variavel resultado da multiplicação
    

    function multiplicacaoHo() {

        let textoFinal = ""
        const n = Number(inputQuantHo)
        for(let i= 0 ; i < n; i ++){
            textoFinal = textoFinal + "Ho "

        }

        setResultado (textoFinal)

    }


    return (
        <div>
        <h1>HO HO HO !!!!</h1>
        NUMERO DE HO <input type='number'
        value={inputQuantHo}
        onChange={(e) => setInputQuantHo(e.target.value)}
        />

        <div></div>
  
       <button onClick={multiplicacaoHo}>Faz Ho!!!!</button>
  
          <p>{resultado}</p> 
          {/* para aparecer o resultado */}
  
      </div>
    )
}


export default HoHoHo
