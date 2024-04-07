function validarPassword() {
   
    const codigo1 = document.getElementById("codigo1").value;
    const codigo2 = document.getElementById("codigo2").value;
    const codigo3 = document.getElementById("codigo3").value;

    const passwordOk = codigo1 + codigo2 + codigo3;

    if (passwordOk === "911") {
        document.getElementById("mensaje").innerHTML = "Muy bien, Password 1 CORRECTO";
    } else if (passwordOk === "714") {
        document.getElementById("mensaje").innerHTML = "Bien! Password 2 CORRECTO";
    } else {
        document.getElementById("mensaje").innerHTML = "Password INCORRECTO";
    }
}