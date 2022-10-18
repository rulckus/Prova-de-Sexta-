
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

export function totalCompra(inteiras,meias,diaSemana,nacional){
    let int= inteiras*28.50;
    let mei= meias * (28.50/2);
    let soma= int+mei
    if(nacional===true){
        return (inteiras+meias)*5;
    }
    
    else if(diaSemana==='quarta-feira'){
        return (inteiras+meias)*14.25
    }
    else{
        return soma
    }
}

export function sitOrcamento(ganhos, gastos) {
    let calculo= ganhos*(gastos/100)
    let porcento= calculo/1000
    let msg=""
    if(porcento>100){
        msg= "Orçamento comprometido! hora de rever seu gastos!"
    }
    if(porcento>=81&&porcento<=100){
        msg="Cuidado seu orçamento pode ficar comprometido"
    }
    if(porcento>=51&&porcento<=80){
        msg="Atenção, melhor conter seu gastos!"
    }
    if(porcento>=21&&porcento<=50){
        msg="Muito bem seus gastos não passam metade dos seus ganhos!"
    }
    if(porcento>=0&&porcento<=20){
        msg="Parábens está gerenciando bem seu orçamento!"
    }
    return msg
}

export function IniFim(inicio, fim) {
    let array = [];
    let e=0 
    
    for (let i = inicio; i <= fim; i++ ) {
          array[e] = i;
          e++  
          
    }
    return array
    
}

export function Linha(numero){
    let array=[];
    for (let i = 0; i < numero; i++) {
        array[i] = "*"
        
    }
    return array
}

export function retangulo(base, altura) {
    let matriz = [];
        let array =[];

        for (let i = 0; i < base; i++) {
            array[i] = "*";   
            
            for (let j = 0; j < altura; j++) {
                matriz[j] = new Array (array);
            }
        }
        return matriz
}

export function retangulo2(base, altura) {
    let matriz = [];
        let array =[];

        for (let i = 0; i < base; i++) {
            array[i] = "⚫";   
            
            for (let j = 0; j < altura; j++) {
                matriz[j] = new Array (array);
            }
        }
        return matriz
}

export function retangulo3(base, altura) {
    let matriz = [];
        let array =[];

        for (let i = 0; i < base; i++) {
            array[i] = "⬛";   
            
            for (let j = 0; j < altura; j++) {
                matriz[j] = new Array (array);
            }
        }
        return matriz
}

