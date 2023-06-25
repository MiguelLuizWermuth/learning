function calcularCalorias() {

    // Leitura e armazenamento das variáveis para o calculo

    var velocidade = document.getElementById("velocidade").value;
    var peso = document.getElementById("peso").value;
    var tempo = document.getElementById("tempo").value;

    // Cálculo das calorias gastas e armazenamento em variável

    var calorias = velocidade * peso * 0.0175 * tempo;

    document.getElementById("calorias").innerHTML = calorias;
}

