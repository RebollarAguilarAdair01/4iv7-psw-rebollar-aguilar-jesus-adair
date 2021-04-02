function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular(){
    var NUMU = document.formulario.NumU.value;
    var VALU = parseInt(NUMU);

    var NUMD = document.formulario.NumD.value;
    var VALD = parseInt(NUMD);

    var NUMT = document.formulario.NumT.value;
    var VALT = parseInt(NUMT);

    if(VALU > VALD, VALU> VALT){
        document.formulario.NumM.value = VALU;

    }
    if(VALD > VALU, VALD > VALT){
        document.formulario.NumM.value = VALD;

    }
    if(VALT > VALU, VALT > VALD){
        document.formulario.NumM.value = VALT;

    }
}

function Borrar(){
    document.formulario.NumU.value = "";
    document.formulario.NumD.value = "";
    document.formulario.NumT.value = "";
    document.formulario.NumM.value = "";
}