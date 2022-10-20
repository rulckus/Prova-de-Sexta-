import { useState } from "react"
import { paradas } from "../../services";
import '../../common.scss'
import { Link } from "react-router-dom";

export default function Index(){

    const[capac,setCapac]= useState(0);
    const[consumo,setConsumo]= useState(0);
    const[dist,setDist]= useState(0);
    const[resp,setResp]= useState('');
    const[erro,setErro]= useState('')

    function calc() {
        const r = paradas(capac, consumo, dist)
        setResp(r);
        if(!capac){
            setErro('Insira a capacidade do tanque')
            setResp(0)
        }
        if(!consumo){
            setErro('Insira o consumo')
            setResp(0)
        }
        if(!dist){
            setErro('Insira a distancia')
            setResp(0)
        }
        if(capac<0||consumo<0||dist<0){
            setErro('Apenas números positivos')
            setResp(0)
        }
    }

    return(
        <main>
            <Link className="Link" to='/'>Voltar</Link>
            <h1>Paradas</h1>
            <p>Capacidade do Tanque</p>
            <input value={capac} type="number" onChange={e =>setCapac(e.target.value)} />
            <p>Consumo</p>
            <input value={consumo} type="number" onChange={e => setConsumo(e.target.value)} />
            <p>Distância</p>
            <input value={dist} type="number" onChange={e => setDist(e.target.value)}/>

            <button onClick={calc}>Calcular</button>
            <p>Você precisara fazer {resp} paradas para abastecer</p>
            {erro}
        </main>
    )
}