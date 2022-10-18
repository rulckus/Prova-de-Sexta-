import { useState } from "react"
import { Linha } from "../../services";

export default function Index(){

    const [num, setNum]= useState(0);
    const [resp, setResp]= useState([]);

    function click() {
        const r = Linha(num)
        setResp(r)
    }

    return(
        <div>
            <p>Tamanho</p>
            <input value={num} type="number" onChange={e=> setNum(e.target.value)}/>
            <button onClick={click}>Mostrar</button>

            <p>{resp}</p>
        </div>
    )
}