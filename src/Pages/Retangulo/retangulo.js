import { useState } from "react"
import { retangulo, retangulo2, retangulo3, retangulofoto } from "../../services";

export default function Index() {

    const[base,setBase]=useState(0);
    const[altura,setAltura]= useState(0);
    const[tipo,setTipo]= useState('');
    const[resp,setResp]= useState([]);
    const[Erro,setErro]= useState('');

    function click() {
        if(tipo==='Asteristico'){
        const r= retangulo(base, altura)
        setResp(r)    
    }
    else if(tipo==='Circulo'){
        const r= retangulo2(base, altura)
        setResp(r)
    }
    else if(tipo==='Quadrado'){
        const r= retangulo3(base, altura)
        setResp(r)
    }
    else{
        setErro('Escolha um tipo')
    }


    }

    return(
        <div>
            <p>Base:</p>
            <input value={base} type="Number" onChange={e=> setBase(e.target.value)}/>
            <p>Altura:</p>
            <input value={altura} type="Number" onChange={e=> setAltura(e.target.value)}/>
            <p>Tipo:</p>
            <input value={tipo} type="text" onChange={e=>setTipo(e.target.value)}/>
            <p>Tipos que tem</p>
            <p>Asteristico</p>
            <p>Circulo</p>
            <p>Quadrado</p>
    
            
            <button onClick={click}>Mostrar</button>
            {Erro}

            {resp.map(item => <p>{ item }</p>)}
        </div>
    )
}