function popup() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var localizacao = document.getElementById("localizacao").value;
    var interesses = document.getElementById("interesses").value;
    alert("Dados Enviados!"+"\nSeu Nome: " + nome +"\nSeu Email: " + email +"\nSeu Telefone: " + telefone
    +"\nSua Localização: " + localizacao +"\nSeus Interesses: " + interesses)
}