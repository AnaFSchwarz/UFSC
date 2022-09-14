function verificaResposta() {
    const resposta = formulario.sistema.value
    if (resposta == "android") {
        document.getElementById("oi").innerHTML = "Seu celular trava"
    } else {
        document.getElementById("oi").innerHTML = "Ta acabando sua bateria"
    }
}