/*Um Posto de combustíveis deseja determinar qual de seus produtos tem a preferência de seus clientes. Escreva um algoritmo para ler o tipo de combustível abastecido (codificado da seguinte forma: 1.Álcool 2.Gasolina 3.Diesel 4.Fim). Caso o usuário informe um código inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código (até que seja válido). O programa será encerrado quando o código informado for o número 4.

Entrada
A entrada contém apenas valores inteiros e positivos.

Saída
Deve ser escrito a mensagem: "MUITO OBRIGADO" e a quantidade de clientes que abasteceram cada tipo de combustível, conforme exemplo.
*/

import {useState} from 'react'

function Tipocombustivel() {

    const [inputCombustivel, setinputCombustivel] = useState("")
    const [situacao, setsituacao] = useState("")
    const [contadorAlc, setContadorAlc] = useState(0)
    const [contadorGas, setContadorGas] = useState(0)



    function processar(){
        // let contadorAlc = 0
        let contadorGas = 0
        let contadorDie = 0
    
        if (inputCombustivel == 1) {
            setsituacao("Alcool")
            // contadorAlc++
            setContadorAlc(contadorAlc+1)
        } 
        else if(inputCombustivel == 2) {
             setsituacao("Gasolina")
             contadorGas++
        }

        else if (inputCombustivel == 3) {
            setsituacao("Diesel")
            contadorDie++
        }
        else if (inputCombustivel == 4) {
        setsituacao("stop")
        
        }
        else {
        setsituacao("Codigo ivalido")
     }
    }

    return (
        <div>
        
            <h1>Tipo de combustivel</h1>
                Tipo de combustivel: <input type = "number" 
                value = {inputCombustivel}
                onChange={(e) => setinputCombustivel(e.target.value)}// espelhamento 
            />
            
            <button onClick = {processar}>verificar capacidade</button>

            <p>{situacao}</p>

        
        </div>
    )
}

export default Tipocombustivel
