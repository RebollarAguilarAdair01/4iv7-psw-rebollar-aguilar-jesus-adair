function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular(){

    var Sueldo = document.formulario.Paga.value;
    var SUEL = parseInt(Sueldo);

    var Tiempo = document.formulario.Hrs.value;
    var TIME = parseInt(Tiempo);

    if(TIME<40){
        var PAGTOTAL = SUEL*TIME;
        document.formulario.ToPaga.value = PAGTOTAL;
        document.formulario.ToHrs.value = TIME;
    }else{
        if(TIME>40, TIME<=48){
        var HRSE = (TIME-40)*2;
        var HRSTU = 40 + HRSE;
        var PAGATOTAL = HRSTU * SUEL;
        document.formulario.ToPaga.value = PAGATOTAL;
        document.formulario.ToHrs.value = HRSTU;
        }
    }
    if(TIME>48){
        var HRSED = (TIME-48)*3;
        var HRSTD = 56 + HRSED;
        var PAGATOTAL = SUEL * HRSTD;
        document.formulario.ToPaga.value = PAGATOTAL;
        document.formulario.ToHrs.value = HRSTD;

    }

}

function Borrar(){
    document.formulario.Paga.value = "";
    document.formulario.Hrs.value = "";
    document.formulario.ToPaga.value = "";
    document.formulario.ToHrs.value = "";
}