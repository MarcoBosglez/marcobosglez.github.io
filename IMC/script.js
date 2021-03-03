function calcularIMC() {
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value;
  var imc = peso / (altura * altura);
  imc = imc.toFixed(2)
  if (imc <= 18.5) {
    document.getElementById("resultado").style.color = "#00E0FF"
    document.getElementById("resultado").innerHTML = imc;
    document.getElementById("comment").innerHTML = "Bajo de peso"
  } else if (imc > 18.5 && imc <= 24.9) {
    document.getElementById("resultado").style.color = "#00FF4D"
    document.getElementById("resultado").innerHTML = imc;
    document.getElementById("comment").innerHTML = "Saludable"
  } else if (imc > 25 && imc <= 29.9) {
    document.getElementById("resultado").style.color = "#dddd"
    document.getElementById("resultado").innerHTML = imc;
    document.getElementById("comment").innerHTML = "Sobrepeso"
  } else if (imc > 30 && imc <= 34.9) {
    document.getElementById("resultado").style.color = "#dddd"
    document.getElementById("resultado").innerHTML = imc;
    document.getElementById("comment").innerHTML = "Obesidad Grado 1"
  } else if (imc > 34 && imc <= 39.9) {
    document.getElementById("resultado").style.color = "#dddd"
    document.getElementById("resultado").innerHTML = imc;
    document.getElementById("comment").innerHTML = "Obesidad Grado 2"
  } else{
    document.getElementById("resultado").style.color = "#black"
    document.getElementById("resultado").innerHTML = imc;
    document.getElementById("comment").innerHTML = "Obesidad Mórbida"
  } 
}