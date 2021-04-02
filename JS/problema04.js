function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}


function calcular(){
    var valorU = document.formulario.tresCa.value;
    var calU = parseInt(valorU);
    var CALUNO = (calU*55)/10;

    var valorD = document.formulario.exaF.value;
    var calD = parseInt(valorD);
    var CALDOS = (calD*30)/10;

    var valorT = document.formulario.traFi.value;
    var calT = parseInt(valorT);
    var CALTRES = (calT*15)/10;

    var CALFINAL = (CALUNO + CALDOS + CALTRES)/10;
    document.formulario.CalFinal.value = CALFINAL;
}

function Borrar(){
    document.formulario.tresCa.value = "";
    document.formulario.exaF.value = "";
    document.formulario.traFi.value = "";
    document.formulario.CalFinal.value = "";

}