import { useState } from "react"
import { Libra } from "../../services";
import './libra.scss'
import { Link } from 'react-router-dom';

export default function Index() {
    
    const [mes, setMes] = useState('');
    const [dia, setDia] = useState('');
    const [resp, setResp] = useState('');
    const [teste, setTeste] = useState(false);

    function testar() {
        const r= Libra(mes, dia)
        setTeste(r)
        retorno()
    }
    function retorno() {

        if (teste===true) {
            setResp('Sim')
        }
        else{
           setResp('Não')
        }
    }
    
    return(
        <main className="main2">
            <div className="container2">
                
                <h1>É de Libra?</h1>
                <p>Mês</p>
                <input value={mes}  type="text" placeholder="Insira o mês" onChange={e => setMes(e.target.value)} />

                <p>Dia</p>
                <input value={dia} type="text" placeholder="Insira o dia" onChange={e => setDia(e.target.value)} />

                <button className="botao2" onClick={testar}>Verificar</button>
                <p>É do Signo de Libra? {resp}</p>
                <Link to='/' className="voltar">Voltar</Link>
            </div>
        </main>
        )
}