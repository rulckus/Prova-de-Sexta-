import { useState } from "react"
import { sitOrcamento } from "../../services";
import { Link } from "react-router-dom";


export default function Index(){

    const[ganhos,setGanhos]= useState(0);
    const[gastos,setGastos]= useState(0);
    const[resp,setResp]= useState('')

    function calcular() {
        const r = sitOrcamento(ganhos, gastos)
        setResp(r)
    }

    return(
        <main>
            <Link to='/'>Voltar</Link>
            <h1>Orçamento</h1>
            <p>Ganhos</p>
            <input value={ganhos} type="number" onChange={e => setGanhos(e.target.value)}/>
            <p>Gastos</p>
            <input value={gastos} type="number" onChange={e => setGastos(e.target.value)}/>
            <button onClick={calcular}>Calcular</button>
            <p>{resp}</p>
        </main>
    )
}