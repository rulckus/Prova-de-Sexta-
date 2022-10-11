
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

export function salario(salario, bonus,desc){
    let total = salario + ((salario/100) * bonus);
    let final = total - desc;
    return final
}


export function paradas(capac, consumo, dist) {
    let a = dist/consumo;
    let b = a/capac
    return Math.ceil(b);
}


export function Temperatura(graus){
    let msg=''
    if (graus>=41) {
        msg= 'Hipertermia'
    }
    else if(graus>=39.6&&graus<41){
        msg= 'Febre Alta'
    }
    else if(graus>=37.6&&graus<39.6){
        msg="Febre"
    }
    else if(graus>=36&&graus<37.6){
        msg="Normal"
    }
    else{
        msg="Hipotermia"
    }
    return msg; 
}