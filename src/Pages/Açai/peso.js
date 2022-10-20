import { useState } from "react"
import { Açai } from "../../services";
import { Link } from 'react-router-dom';
import '../../common.scss'
import './peso.scss'


export default function Index(){
    
    const[peq, setPeq]= useState(0);
    const[med, setMed]= useState(0);
    const[gra, setGra]= useState(0);
    const[desc, setDesc]= useState(0);
    const[resp, setResp]= useState(0);

    function calcular(){
        const r= Açai(peq, med, gra, desc)
        setResp(r)
        if(desc<0){
            setResp('Desconto negativo não pode')
        }
        if(peq<0||med<0||gra<0){
            setResp('Valores negativos não pode')
        }
    }
    
    return(
        <main className="main">
            <div className="container">
                
                <h1 className="title">Açai</h1>
                <p>Quantidades</p>
                <div>
                    <p>Pequena</p>
                    <input value={peq} type="number" onChange={e => setPeq(e.target.value)}/>
                </div>
                <div>   
                    <p>Média</p>
                    <input value={med} type="number" onChange={e => setMed(e.target.value)}/>
                </div>    

                <div>
                <p>Grande</p>
                <input value={gra} type="number" onChange={e => setGra(e.target.value)} />
                </div>

                <div>
                <p>Desconto</p>
                <input value={desc} type="number" onChange={e => setDesc(e.target.value)}/>
                </div>

                <div className="buton">
                <button className="botao" onClick={calcular}>Calcular</button>
                </div>
                <p>Total à pagar é R$ {resp}</p>

                <button className="volta"><Link className="link" to='/'>Voltar</Link></button>
            </div>
        </main>
    )
}