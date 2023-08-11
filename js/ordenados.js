function ordenar(){

    var numero1 = document.getElementById("numero1");
    var numero2 = document.getElementById("numero2");
    var numero3 = document.getElementById("numero3");
    var numero4 = document.getElementById("numero4");
    var numero5 = document.getElementById("numero5");
    var numero6 = document.getElementById("numero6");
    var numero7 = document.getElementById("numero7");
    var numero8 = document.getElementById("numero8");
    var numero9 = document.getElementById("numero9");
    var numero10 = document.getElementById("numero10");

    console.log (numero1);

    var resposta = document.getElementById("resposta_ordenada");
    
    var numbersArray = [];

    numbersArray[0] = Number(numero1.value);
    numbersArray[1] = Number(numero2.value);
    numbersArray[2] = Number(numero3.value);
    numbersArray[3] = Number(numero4.value);
    numbersArray[4] = Number(numero5.value);
    numbersArray[5] = Number(numero6.value);
    numbersArray[6] = Number(numero7.value);
    numbersArray[7] = Number(numero8.value);
    numbersArray[8] = Number(numero9.value);
    numbersArray[9] = Number(numero10.value);

    console.log(numbersArray);

    for (var i = 1; i <= 10; i++) {
        resposta.innerText = numbersArray.sort();
    }
      
}