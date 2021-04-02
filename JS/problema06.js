function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular(){
    var EDAD = document.formulario.Año.value;
    var E = parseInt(EDAD);

    if(E <= 2021){
    var EDADA = 2021 - E;

    document.formulario.Edad.value = EDADA + " años";
    
    }else{
        alert("Escriba un numero menor a 2021 porfavor")
        document.formulario.Año.focus();
    }
}

function Borrar(){
    document.formulario.Año.value = "";
    document.formulario.Edad.value = "";
}