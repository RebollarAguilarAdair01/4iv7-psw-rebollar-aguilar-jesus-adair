function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular(){
    var valor = document.formulario.precio.value;
    var result = parseInt(valor);
    var descuento = result*0.15;
    var total = result - descuento;

    document.formulario.total.value = "$"+total;
}

function borrar(){
    document.formulario.precio.value = "";
    document.formulario.total.value = "";
}