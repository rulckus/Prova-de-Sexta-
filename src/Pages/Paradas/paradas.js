import { useState } from "react"
import { paradas } from "../../services";

export default function Index(){

    const[capac,setCapac]= useState(0);
    const[consumo,setConsumo]= useState(0);
    const[dist,setDist]= useState(0);
    const[resp,setResp]= useState(0);

    function calc() {
        const r = paradas(capac, consumo, dist)
        setResp(r);
    }

    return(
        <div>
            <h1>Paradas</h1>
            <p>Capacidade do Tanque</p>
            <input value={capac} type="number" onChange={e =>setCapac(e.target.value)} />
            <p>Consumo</p>
            <input value={consumo} type="number" onChange={e => setConsumo(e.target.value)} />
            <p>Distância</p>
            <input value={dist} type="number" onChange={e => setDist(e.target.value)}/>

            <button onClick={calc}>Calcular</button>
            <p>Você precisara fazer {resp} paradas para abastecer</p>
        </div>
    )
}