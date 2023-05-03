function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("verifique os dados e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    [1];
    var idade = ano - Number(fano.value);
    var gênero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      gênero = "homem";
      if (idade >= 0 && idade < 10) {
        //criança;
        img.setAttribute("src", "homem-criança.jpg");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "homem-jovem.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "homem.jpg");
      } else {
        //idoso
        img.setAttribute("src", "homem-idoso.jpg");
      }
    } else if (fsex[1].checked) {
      gênero = "mulher";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "mulher-criança.jpg");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "mulher-jovem.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "mulher.jpg");
      } else {
        //idoso
        img.setAttribute("src", "idosa.jpg");
      }
    }
  }
  res.style.textAlign = "center";
  res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
  res.appendChild(img);
  img.style.maxWidth = "100%";
  img.style.width = "500px";
  img.style.borderRadius = "50%";
  img.style.marginTop = "20px";
}
