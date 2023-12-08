// var response = confirme("Deseja excluir?"); <- modelos de exercícios explicados pelo curso

// console.log(response);

const a = 10;
const b = 33;
// alert(a + b);

function somar(a, b){
    return a + b;
}
// console.log(somar(2, 5));

document.querySelector("#calcular").addEventListener("click", function(){
    let valorA = document.querySelector("#valorA").value;
    let valorB = document.querySelector("#valorA").value;
    if(valorA.lenght > 0 && valorB.lenght > 0){
    alert(parseInt(valorA)+parseInt(valorB);
    }else{
        alert("Digite os valores para o cálculo");
    }
});