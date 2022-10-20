import { useState } from "react"
import { Café } from "../../services";
import '../../common.scss'
import { Link } from "react-router-dom";

export default function Index(){

    const[aluno,setAluno]= useState(0);
    const[capac,setCapac]= useState(0);
    const[mili,setMili]= useState(0);
    const[resp,setResp]= useState();

    function Coffe() {
        if(aluno>=1&&mili<=10000){
            const r= Café(Number(aluno), Number(capac), Number(mili))
            setResp(r)
        }

        else{
            setResp('Deu erro')
        }
    }

    return(
        <main>
            <Link className="Link" to='/'>Voltar</Link>
            <h1>Café</h1>
            <p>Alunos</p>
            <input value={aluno} type="number" onChange={e=>setAluno(e.target.value)}/>
            <p>Capacidade</p>
            <input value={capac} type="number" onChange={e=> setCapac(e.target.value)}/>
            <p>Mililitos</p>
            <input value={mili} type="number" onChange={e=> setMili(e.target.value)}/>

            <button onClick={Coffe}>Ver</button>
            <br/>
            {resp}
        </main>
    )
}