/*Mano Juca tá estudando para um entrevista de emprego na [Harry Plotter](/317d393ff68e8036a073c563c31c6098?pvs=25) Serviços de Impressão!!
Mas é claro, ele está apavorado. Na condição dele eu também estaria. Nesse emprego ele deverá usar multiplicações durante o dia todo e o abobado é muito ruim em matemática!
Óbvio, vamos ajudar ele. Crie um programa para mostrar a tabuada de um número que ele digitar.
Ex: se o MJ digitar 2, mostrar
1x2=2
2x2=4
3x2=6
4x2=8
5x2=10
6x2=12
7x2=14
8x2=16
9x2=18
10x2=20
*/

import {useState} from 'react'


function Tabuada() {
    
    const [saida,setSaida] = useState(0)
    
    function calcularTabuada () {
    
    let numeroDigitado = Number (prompt("digite um numero"))
    
    let tabuada = ''
    
    for(let i = 1; i <=10; i ++){
    let resultado = i * numeroDigitado
    tabuada += ` |${i} X ${numeroDigitado} = ${resultado} `
    }
    
    setSaida(`Tabuada do numero ${tabuada}`)
    
    }
    
    return (
        <div>
            <h2>Tabuada</h2>
            <p>resultado: {saida}</p>
            <button onClick= {calcularTabuada}>Calcular a Tabuada!!!!!</button>
        </div>
    )
}

export default Tabuada
