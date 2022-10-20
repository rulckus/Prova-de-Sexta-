import { useState } from "react"
import { IniFim } from "../../services";
import '../../common.scss'
import { Link } from "react-router-dom";

export default function Index(){

    const[ini,setIni]= useState();
    const[fim,setFim]= useState();
    const[resp,setResp]= useState([]);
    const[Erro,setErro]= useState('')

    function clicar() {
        const r= IniFim(ini, fim)
        if (fim<ini) {
            setErro('O fim não pode ser menor que o inicio')            
        }
        if (!fim || !ini) {
            setErro('Insira um valor')
        }
        
        setResp(r)
    }

    return(
        <main>
            <Link className="Link" to='/'>Voltar</Link>
            <p>Início:</p>
            <input value={ini} type="number" onChange={e =>setIni(e.target.value)}/>
            <p>Fim:</p>
            <input value={fim} type="number" onChange={e =>setFim(e.target.value)}/>
            <button onClick={clicar}>OK</button>
            <p>{resp}</p>
            {Erro}
        </main>
    )
}