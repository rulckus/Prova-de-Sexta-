import { useState } from "react"
import { Temperatura } from "../../services";


export default function Index(){
    
    const[graus,setGraus]= useState(0);
    const[resp, setResp]= useState('');

    function click(){
        const r = Temperatura(graus)
        setResp(r)
    }
    
    return(
        <div>
            <h1>Temperatura</h1>
            <h1>Quantos Graus?</h1>
            <input value={graus} type="number" onChange={e => setGraus(e.target.value)}/>

            <button onClick={click}>Ver</button>
            <p>A situação para sua temperatura é {resp}</p>
        </div>
    )
}