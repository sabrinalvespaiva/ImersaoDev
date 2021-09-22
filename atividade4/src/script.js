var listaFilmes = [
  "https://img.elo7.com.br/product/zoom/2657A05/big-poster-harry-potter-e-o-prisioneiro-de-azkaban-lo2-90x60-geek.jpg",
  "https://musicart.xboxlive.com/7/e63b1100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
];

//for each
for (var i = 0; i <= listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
