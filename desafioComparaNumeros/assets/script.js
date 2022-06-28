function comparaNumeros() {
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    const soma = n1 + n2; 
    const iguais = n1 === n2;
    var menorQue10 = soma < 10;
    var maiorQue20 = soma > 20;
    var igual10 = soma === 10;
    var igual20 = soma === 20;
    var resultado = document.getElementById("resultado");

    if (n1 > 0 & n2 > 0) {
        if (iguais) {
            if (menorQue10) {
                return resultado.innerHTML = "Os números " + n1 + " e " + n2 + " são iguais. Sua soma é " + soma + ", que é menor que 10 e menor que 20";
            } else if (maiorQue20) {
                resultado.innerHTML = "Os números " + n1 + " e " + n2 + " são iguais. Sua soma é " + soma + ", que é maior que 10 e maior que 20";
            } else if(igual10 && !maiorQue20) {
                resultado.innerHTML = "Os números " + n1 + " e " + n2 + " são iguais. Sua soma é " + soma + ", que é igual a  10 e menor que 20";
            } else if(igual20 && !menorQue10) {
                resultado.innerHTML = "Os números " + n1 + " e " + n2 + " são iguais. Sua soma é " + soma + ", que é maior que 10 e igual a 20"; 
            } else {
                resultado.innerHTML = "Os números " + n1 + " e " + n2 + " são iguais. Sua soma é " + soma + ", que é maior que 10 e menor que 20";
            }
        } else {
            if (menorQue10) {
                resultado.innerHTML = "Os números " + n1 + " e " + n2 + " não são iguais. Sua soma é " + soma + ", que é menor que 10 e menor que 20";
            } else if (maiorQue20) {
                resultado.innerHTML = "Os números " + n1 + " e " + n2 + " não são iguais. Sua soma é " + soma + ", que é maior que 10 e maior que 20";
            } else if(igual10 && !maiorQue20) {
                resultado.innerHTML = "Os números " + n1 + " e " + n2 + " não são iguais. Sua soma é " + soma + ", que é igual a  10 e menor que 20";
            } else if(igual20 && !menorQue10) {
                resultado.innerHTML = "Os números " + n1 + " e " + n2 + " não são iguais. Sua soma é " + soma + ", que é maior que 10 e igual a 20"; 
            } else {
                resultado.innerHTML = "Os números " + n1 + " e " + n2 + " não são iguais. Sua soma é " + soma + ", que é maior que 10 e menor que 20";
            }
        }
    } else {
        resultado.innerHTML = "Digite números positivos, por favor!"
    }
}