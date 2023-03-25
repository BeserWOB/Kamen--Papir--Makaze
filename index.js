const userChoiseRock = document.getElementById("btn-rock").addEventListener("click", function() {
  document.getElementById("rezultat1").innerHTML = "Kamen";
  const computerChoise = Math.floor(Math.random() * 3 + 1);
  if (computerChoise === 1) {
    document.getElementById("rezultat2").innerHTML = "Kamen";
    document.getElementById("rezultat3").innerHTML = "Nereseno!";
  } else if (computerChoise === 2) {
    document.getElementById("rezultat2").innerHTML = "Papir";
    document.getElementById("rezultat3").innerHTML = "Izgubio si.";
  } else if (computerChoise === 3) {
    document.getElementById("rezultat2").innerHTML = "Makaze";
    document.getElementById("rezultat3").innerHTML = "Pobedio si.";
  }

})

const userChoisePaper = document.getElementById("btn-paper").addEventListener("click", function() {
  document.getElementById("rezultat1").innerHTML = "Papir";
  const computerChoise = Math.floor(Math.random() * 3 + 1);
  if (computerChoise === 1) {
    document.getElementById("rezultat2").innerHTML = "Kamen";
    document.getElementById("rezultat3").innerHTML = "Pobedio si.";
  } else if (computerChoise === 2) {
    document.getElementById("rezultat2").innerHTML = "Papir";
    document.getElementById("rezultat3").innerHTML = "Nereseno!";
  } else if (computerChoise === 3) {
    document.getElementById("rezultat2").innerHTML = "Makaze";
    document.getElementById("rezultat3").innerHTML = "Izgubio si.";
  }
})

const userChoiseScissors = document.getElementById("btn-scissors").addEventListener("click", function() {
  document.getElementById("rezultat1").innerHTML = "Makaze";
  const computerChoise = Math.floor(Math.random() * 3 + 1);
  if (computerChoise === 1) {
    document.getElementById("rezultat2").innerHTML = "Kamen";
    document.getElementById("rezultat3").innerHTML = "Izgubio si.";
  } else if (computerChoise === 2) {
    document.getElementById("rezultat2").innerHTML = "Papir";
    document.getElementById("rezultat3").innerHTML = "Pobedio si.";
  } else if (computerChoise === 3) {
    document.getElementById("rezultat2").innerHTML = "Makaze";
    document.getElementById("rezultat3").innerHTML = "Nereseno!";
  }









})
