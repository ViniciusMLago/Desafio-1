let vagas = JSON.parse(localStorage.getItem("vagas")) || [];

let tabela = document.getElementById("listaVagas");

for(let i=1;i<=10;i++){
    let vaga = vagas.find(v => v.vaga == i);

    let linha = document.createElement("tr");

    if(vaga){
        linha.innerHTML = `
        <td>${i}</td>
        <td>${vaga.placa}</td>
        <td class="ocupada"><strong>Ocupada<strong/></td>
        `;
    }else{
        linha.innerHTML = `
        <td>${i}</td>
        <td>${"-"}</td>
        <td class="disponivel"><strong>Disponível</strong></td>
        `;
    }
    tabela.appendChild(linha);
}