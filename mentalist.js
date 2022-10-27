var numeroSecreto = 3;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    console.log("acertou");
  } else {
    console.log("errou");
  }
}
