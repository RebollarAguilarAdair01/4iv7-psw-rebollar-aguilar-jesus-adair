function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function EXTRA(){
    var base = document.formulario.SueldoB.value;
    var BASE = parseInt(base);

    var FCo = (BASE*30)/100;
    var FTot = BASE + FCo;

    document.formulario.Extra.value = "$" + FCo;
    document.formulario.Total.value = "$" + FTot;
}

function Borrar(){
    document.formulario.SueldoB.value = "";
    document.formulario.Extra.value = "";
    document.formulario.Total.value = "";
}