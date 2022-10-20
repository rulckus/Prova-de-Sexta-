import { useState } from "react"
import { Temperatura } from "../../services";
import '../../common.scss'
import { Link } from "react-router-dom";


export default function Index(){
    
    const[graus,setGraus]= useState(0);
    const[resp, setResp]= useState('');

    function click(){
        const r = Temperatura(graus)
        setResp(r)
    }
    
    return(
        <main>
            <Link className="Link" to='/'>Voltar</Link>
            <h1>Temperatura</h1>
            <p>Quantos Graus?</p>
            <input value={graus} type="number" onChange={e => setGraus(e.target.value)}/>

            <button onClick={click}>Ver</button>
            <p>A situação para sua temperatura é {resp}</p>
        </main>
    )
}