document.getElementById("formCadastro").addEventListener("submit", function(e){
    
    e.preventDefault();

    let placa = document.getElementById("placa").value;
    let nome = document.getElementById("nome").value;
    let apartamento = document.getElementById("apartamento").value;
    let bloco = document.getElementById("bloco").value;
    let modelo = document.getElementById("modelo").value;
    let cor = document.getElementById("cor").value;
    let vaga = document.getElementById("vaga").value;

    let dados = {
        placa,
        nome,
        apartamento,
        bloco,
        modelo,
        cor,
        vaga
    };

    let vagas = JSON.parse(localStorage.getItem("vagas")) || [];

    let vagaOcupada = vagas.find(v => v.vaga == vaga);

    if(vagaOcupada){
        alert("Vaga já ocupada!");
        return;
    }

    vagas.push(dados);

    localStorage.setItem("vagas", JSON.stringify(vagas));

    console.log(dados);

    alert("Cadastro realizado com sucesso!");

    document.getElementById("formCadastro").reset();
});