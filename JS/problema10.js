function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular(){
    var TIME = document.formulario.Ant.value;
    var Anti = parseInt(TIME);

    var SALDO = document.formulario.Sal.value;
    var PagoM = parseInt(SALDO);

    if(Anti<12){
        var HUU = (PagoM*5)/100;
        var HUD = 12*HUU;
        document.formulario.UtiF.value = HUD;
    }else{
        if(Anti=>12, Anti<24){
        var HUU = (PagoM*7)/100;
        var HUD = 12*HUU;
        document.formulario.UtiF.value = HUD;
        }else{
            if(Anti=>24, Anti<60){
                var HUU = (PagoM*10)/100;
                var HUD = 12*HUU;
                document.formulario.UtiF.value = HUD;
            }else{
                if(Anti=>60, Anti<120){
                    var HUU = (PagoM*15)/100;
                    var HUD = 12*HUU;
                    document.formulario.UtiF.value = HUD;
                }else{
                    if(Anti=>120){
                        var HUU = (PagoM*20)/100;
                        var HUD = 12*HUU;
                        document.formulario.UtiF.value = HUD;
                    }
                }
            }
        }
    }
    
}

function Borrar(){
    document.formulario.Ant.value = "";
    document.formulario.Sal.value = "";
    document.formulario.UtiF.value = "";
}