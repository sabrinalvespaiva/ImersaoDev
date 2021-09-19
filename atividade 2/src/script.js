function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico * 5.29;
  console.log(valorEmReal);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;

  var elementoValorConvertidoBitcoin = document.getElementById(
    "valorConvertidoBitcoin"
  );
  var valorBitcoin = valorEmDolarNumerico * 47.903;
  var valorConvertidoBitcoin =
    "O valor em bitcoin é $ " + valorBitcoin + " dolares";
  elementoValorConvertidoBitcoin.innerHTML = valorConvertidoBitcoin;
}
