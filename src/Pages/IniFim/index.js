import { useState } from "react"
import { IniFim } from "../../services";

export default function Index(){

    const[ini,setIni]= useState();
    const[fim,setFim]= useState();
    const[resp,setResp]= useState([]);

    function clicar() {
        const r= IniFim(ini, fim)
        setResp(r)
    }

    return(
        <div>
            <p>Início:</p>
            <input value={ini} type="number" onChange={e =>setIni(e.target.value)}/>
            <p>Fim:</p>
            <input value={fim} type="number" onChange={e =>setFim(e.target.value)}/>
            <button onClick={clicar}>OK</button>
            <p>{resp}</p>
        </div>
    )
}