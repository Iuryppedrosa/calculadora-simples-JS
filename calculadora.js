function calculadora(calculo){

   var valor1 = document.getElementById("valor1").value;
   var valor2 = document.getElementById("valor2").value;

   if(!isNaN(valor1) && !isNaN(valor2)){
    console.log("nao é um numero")
    if(valor1 === "" && valor2 === ""){
        document.getElementById("resultadoErro")
        .textContent="Vc precisa colocar numeros para o calculo"
    }else{
        var resultado = 0;
        if(calculo === "soma")
        {
            resultado = parseFloat(valor1) + parseFloat(valor2);

        } else if (calculo === "multiplicar") {
            resultado = parseFloat(valor1) * parseFloat(valor2);

        } else if (calculo === 'subtrair'){
            resultado = parseFloat(valor1) - parseFloat(valor2);
            
        } else if (calculo === 'divisao'){
            resultado = parseFloat(valor1) / parseFloat(valor2);

        }
        

    //alert(soma)
 
    document.getElementById("resultado").value = resultado;

    }
   }
}

//soma();