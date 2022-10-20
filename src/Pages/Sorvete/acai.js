import { useState } from "react"
import { Sorvete } from "../../services";
import './acai.scss'
import { Link } from 'react-router-dom';
import '../../common.scss'


export default function Index(){

    const [gramas, setGramas]= useState (0)
    const [resp, setResp]= useState('')

    function calcular() {
        const r = Sorvete(gramas)
        setResp(r)
    }

    return(
        <main className="main1">
            <Link className="Link" to='/'>Voltar</Link>
            <div className="container1">
                <h1 className="title">Sorvete</h1>
                <p>Gramas</p>
                <input value={gramas} type="number" onChange={e => setGramas(e.target.value)} />
                <button className="botao" onClick={calcular}>Calcular</button>
                <p>O total a pagar é R$</p>
                <p>{resp}</p>
            </div>
        </main>
    )
}