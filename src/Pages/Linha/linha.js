import { useState } from "react"
import { Linha } from "../../services";
import '../../common.scss'
import { Link } from "react-router-dom";

export default function Index(){

    const [num, setNum]= useState(0);
    const [resp, setResp]= useState([]);
    const[Erro,setErro]= useState('')

    function click() {
        const r = Linha(num)
        if(num<0){
            setErro('Insira um valor positivo')
        }
        setResp(r)
    }

    return(
        <main>
            <Link className="Link" to='/'>Voltar</Link>
            <p>Tamanho</p>
            <input value={num} type="number" onChange={e=> setNum(e.target.value)}/>
            <button onClick={click}>Mostrar</button>
            {Erro}
            <p>{resp}</p>
        </main>
    )
}