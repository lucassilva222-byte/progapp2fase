/*
No Colégio Neps Academy (CNA) um aluno é aprovado por média se ele obtiver uma média final maior ou igual a 7, caso o aluno tenha uma média menor que 7 mas maior ou igual a 4 ele está de recuperação, caso ele tenha uma média menor que 4 o aluno está reprovado.

A média é calculada com a nota das duas provas aplicadas no semestre e corresponde simplesmente a média aritimética das duas notas.

Baseado nas duas notas do aluno, indique o resultado final do aluno: "Aprovado", "Reprovado" ou "Recuperacao".

Entrada
A entrada consiste de apenas uma linha com as notas 
A
A e 
B
B, que correspondem as duas notas que o aluno conquistou esse semestre.

Saída
A saída do seu programa deve ser apenas uma linha. Caso o aluno tenha sido aprovado informe "Aprovado", caso o aluno tenha sido reprovado informe "Reprovado" e caso ele esteja de recuperação informe "Recuperacao".

*/

import { useState } from 'react'

function Media() {

    const [inputNotaA, setInputNotaA] = useState("0")
    const [inputNotaB, setInputNotaB] = useState("0")
    const [mediaNotas, setMediaNotas] = useState("")
    const [situacao, setsituacao] = useState("")

    function calcularMedia() {
        let somaNota
        somaNota = Number(inputNotaA) + Number(inputNotaB) //Number serve para converte o numero de texto para numeral 
        setMediaNotas(somaNota / 2)
        if(setMediaNotas >= 7){
            setsituacao("Aparovado") // no react tem que ser ente "( )" fica igual ao o "="
        }else{
            setsituacao("Reprovado")
        }
    }

    return (
        <div>
            <h1>MEDIA NOTA</h1>
            <div>
                NOTA A: <input type="number"
                    value={inputNotaA}
                    onChange={(e) => setInputNotaA(e.target.value)}//Pra atualisar no use state sempre vai ser nesse formato só carimbar 
                />
            </div>
            NOTA B: <input type="number"
                value={inputNotaB}
                onChange={(e) => setInputNotaB(e.target.value)}
            />
            <div>
                <button onClick={calcularMedia}>Calcular Media</button>

                <p>{mediaNotas}</p>

                </div>

                <p>{situacao}</p> 

        

        </div>

    )
}

export default Media
