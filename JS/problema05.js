function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular(){
    var Alumnas = document.formulario.NoAlumnas.value;
    var NoNiñas = parseInt(Alumnas);

    var Alumnos = document.formulario.NoAlumnos.value;
    var NoNiños = parseInt(Alumnos);

    var total = NoNiñas + NoNiños;

    var PorNiña = (NoNiñas*100)/total;
    var PorNiño = (NoNiños*100)/total;

    document.formulario.ResultAlumna.value = PorNiña + "%";
    document.formulario.ResultAlumno.value = PorNiño + "%";
    
}

function Borrar(){
    document.formulario.NoAlumnas.value = "";
    document.formulario.NoAlumnos.value = "";
    document.formulario.ResultAlumna.value = "";
    document.formulario.ResultAlumno.value = "";
}