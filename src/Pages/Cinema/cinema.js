import { useState } from "react"
import { totalCompra } from "../../services";
import { Link } from "react-router-dom";
import '../../common.scss'

export default function  Index() {

    const [int,setInt]= useState(0);
    const [mei,setMei]= useState(0);
    const [day,setDay]= useState('');
    const [nac,setNac]= useState(false);
    const [resp, setResp]= useState('');

    function calcular() {
        const r= totalCompra(Number(int), Number(mei), day, nac)
        setResp(r);
        if(int<0|| mei<0){
            setResp('Valores Negativos não são aceitos')
        }
    }

    return(  
    <main>
        <Link to='/'>Voltar</Link>
        <h1>Preço do Cinema</h1>
        <p>Inteiras</p>
        <input value={int} type="text" onChange={e =>setInt(e.target.value)}/>
        <p>Meias</p>
        <input value={mei} type="number" onChange={e => setMei(e.target.value)}/>
        <p>Dia da semana</p>
        <input value={day} type="text" onChange={e => setDay(e.target.value)}/>
        <p>Nacional?</p>
        <input value={nac} type="checkbox" onChange={e => setNac(e.target.checked)}/>

        <button onClick={calcular}>Calcular</button>
        <p>O total a se pagar é {resp}</p>
    </main>
    )
   
}