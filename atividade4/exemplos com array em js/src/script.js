var listaFilmes = [
  "Harry Potter e o Prisioneiro de Azkaban",
  "A origem",
  "O Senhor dos Aneis"
];

//adiciona um novo elemento no array
listaFilmes.push("Clube da Luta");

console.log(listaFilmes.length);
//tbm funciona sem o .lenght
for (var i = 0; i <= listaFilmes.length; i++) {
  document.write("<p>" + listaFilmes[i] + "</p>");
}

//tipos de impressão
/*
var filme1 = "Harry Potter e o Prisioneiro de Azkaban"
document.write("<p>" + filme1 +"</p>");
document.write("<h1>" + filme1 +"</h1>");
document.write("<strong>" + filme1 +"</strong>");
*/
