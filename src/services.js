
export function Libra(mes, dia){
    
    if (mes==='outubro'&& dia <= 22) {
        return true
    }
    if (mes==='setembro'&& dia>=23) {
        return true
    }
    else{
        return false
    }
}

export function Sorvete(gramas){
    let preço = gramas* 3.5;
    if(gramas>=1000){
        preço= gramas* 3;
    }
    if(gramas<=0)
    {
        return 'Peso inválido'
    }
    return preço/100
}

export function Açai(qtdPeq, qtdMed, qtdGra, desc){
    let peq= qtdPeq*13.50;
    let med= qtdMed*15;
    let gra= qtdGra*17.50;
    let total= peq+med+gra
    let desconto= total*(desc/100)
    return total-desconto
}

console.log(Açai(1,1,1,50))