function verificaCampo() {
  document.getElementById("palavra").style.borderColor = "#ffffff";
  document.getElementById("palavra").style.backgroundColor = "#ffffff";
  if(document.getElementById("palavra").value == ""){
    alert("Preencha o campo");
    document.getElementById("palavra").style.borderColor = "red";
    document.getElementById("palavra").style.backgroundColor = "#ffe5e5";
    document.getElementById("palavra").focus();
    return false;
  }
  if (verificaPalindromo()) {
    document.getElementById("palin").innerHTML = document.getElementById("palavra").value + ' é um Palíndromo'
  }else{
    document.getElementById("palin").innerHTML = document.getElementById("palavra").value + ' não é um Palíndromo'
  }
  return true;
}
function verificaPalindromo() {
  var palavra = (document.getElementById("palavra").value)
  const re = /[\W_]/g
  const lowRegStr = palavra.toLowerCase().replace(re, '')
  const reverseStr = lowRegStr.split('').reverse().join('')
  return reverseStr === lowRegStr  
}