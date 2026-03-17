{
    //Calibrar os pneus do carro deve ser uma tarefa cotidiana de todos os motoristas. Para isto, os postos de gasolina possuem uma bomba de ar. A maioria das bombas atuais são eletrônicas, permitindo que o motorista indique a pressão desejada num teclado. Ao ser ligada ao pneu, a bomba primeiro lê a pressão atual e calcula a diferença de pressão entre a desejada e a lida. Com esta diferença ela esvazia ou enche o pneu para chegar na pressão correta.
    
    //Sua ajuda foi requisitada para desenvolver o programa da próxima bomba da SBC - Sistemas de Bombas Computadorizadas.
    
    //Escreva um programa que, dada a pressão desejada digitada pelo motorista e a pressão do pneu lida pela bomba, indica a diferença entre a pressão desejada e a pressão lida.  
    }
    
    import { useState } from 'react'
    
    function Pneu() {
      const [inputPressaoAtual, setInputPressaoAtual] = useState(0)
    const [inputPressaoEscolhida, setInputPressaoEscolhida] = useState(0)
    
    const[pressaoFaltante, setpressaoFaltante] = useState('')
    
      function calcularPressao(){ 
        setpressaoFaltante(inputPressaoEscolhida - inputPressaoAtual)
    
      }
    
      return (
        <>
          <h1>PRESSÃO DE PNEU</h1>
          PRESSÃO ATUAL <input type='number'
          value={inputPressaoAtual}
          onChange={(e) => setInputPressaoAtual(e.target.value)}
          />
    
         <h2></h2>
         PRESSÃO ESCOLHIDA <input type='number'
          value={inputPressaoEscolhida}
          onChange={(e) => setInputPressaoEscolhida(e.target.value)}
          />
    
          <h3></h3>
    
          pressão faltante : {pressaoFaltante}
    
          <div></div>
    
          <button onClick={calcularPressao}>calcular</button>
    
    
        </>
        
      )
    }
    
    export default Pneu
    