import { useState } from "react"
import { retangulo } from "../../services";

export default function Index() {

    const[base,setBase]=useState(0);
    const[altura,setAltura]= useState(0);
    const[resp,setResp]=([]);

    function click() {
        const r= retangulo(base, altura)
        setResp(r);
    }

    return(
        <div>
            <p>Base:</p>
            <input value={base} type="Number" onChange={e=> setBase(e.target.value)}/>
            <p>Altura:</p>
            <input value={altura} type="Number" onChange={e=> setAltura(e.target.value)}/>
            <button onClick={click}>Mostrar</button>

            <p>{resp}</p>
        </div>
    )
}