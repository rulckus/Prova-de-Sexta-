function salario(salario, bonus,desc){
    let mais= salario*(bonus/100)
    return (salario+mais)-desc
}
console.log(salario(10000,0,0))