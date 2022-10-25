import { useState } from "react"
import '../../common.scss'
import { Media } from "../../services"



export default function Index(){

    const[qtd, setQtd]= useState()
    const[aluno, setAluno]= useState([])
    const[nota, setNota]= useState([])
    const[media, setMedia]= useState();


    function medias() {
        let somaNotas = 0;
         for(let i = 0; i < nota.length; i++){
        somaNotas += nota[i]
        }
        console.log(somaNotas)
        setMedia(somaNotas / aluno)
    }


    function Alunos() {
        let aluno=[]
        
        for (let i =0; i < qtd ; i++){
            aluno[i]= 0;
            
        } 
        setAluno(aluno)
    
    }
    
    
    return (
        <main>
            <h1>Muitas coisa</h1>
            <p>Quantidade de Alunos:</p>
            <input value={qtd} type="number" onChange={e=> setQtd(Number(e.target.value))}/>
            <button onClick={Alunos}>OK</button>

           <div>
            {aluno.map((item,pos)=>

                <div>
                    <p>Aluno {pos+1}</p>
                    <input value={item.nota} type="number" onChange={e=> nota.push(e.target.value)}/>
                </div>
        
            )}
           </div>

           <button onClick={medias}>Calcular</button>
           <p>Média é {media}</p>
           
        </main>
    )
}