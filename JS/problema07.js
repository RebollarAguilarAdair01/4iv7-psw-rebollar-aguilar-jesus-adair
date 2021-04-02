function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular(){
    var valU = document.formulario.NumU.value;
    var VALU = parseInt(valU);

    var valD = document.formulario.NumD.value;
    var VALD = parseInt(valD);
    if(VALD == VALU){
        var MUL = VALD * VALU;
        document.formulario.ResultadoO.value = MUL;
        document.formulario.ResultadoA.value = "Multiplicación";

    }
    if(VALU > VALD){
        var RES = VALU - VALD;
        document.formulario.ResultadoO.value = RES;
        document.formulario.ResultadoA.value = "Resta";

    }
    if(VALU < VALD){
        var SUM = VALU + VALD;
        document.formulario.ResultadoO.value = SUM;
        document.formulario.ResultadoA.value = "Suma";

    }

    
}

function Borrar(){
    document.formulario.NumU.value = "";
    document.formulario.NumD.value = "";
    document.formulario.ResultadoO.value = "";
    document.formulario.ResultadoA.value = "";
}