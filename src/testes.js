function totalCompra(inteiras,meias,diaSemana,nacional){
    let int= inteiras*28.50;
    let mei= meias * (28.50/2);
    let soma= int+mei
    if(nacional==true){
        return (inteiras+meias)*5;
    }
    
    else if(diaSemana=='quarta-feira'){
        return (inteiras+meias)*14.25
    }
    else{
        return soma
    }
}



function sitOrcamento(ganhos, gastos) {
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
console.log(sitOrcamento(3000,6100))

