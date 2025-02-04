
function Factorial(){
    const input = Number(document.getElementById("factorial").value);

    let result = 1;
    if (!Number.isInteger(input)){
        window.alert("Ingrese un numero Entero!");
        return;
    }
    if (input <= 0){
        window.alert("Ingrese un numero Positivo mayor que 0");
        return;
    }

    for (let i = 1; i <= input; i++){
        result = result * i;
    }

    document.getElementById("result").innerHTML = `El Factorial de ${input} es ${result}`;

}