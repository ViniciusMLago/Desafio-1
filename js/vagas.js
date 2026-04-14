let vagas = JSON.parse(localStorage.getItem("vagas")) || [];

let tabela = document.getElementById("listaVagas");

for(let i=1;i<=10;i++){
    let vaga = vagas.find(v => v.vaga == i);

    let linha = document.createElement("tr");

    if(vaga){
        linha.innerHTML = `
        <td>${i}</td>
        <td>${vaga.placa}</td>
        <td> style="color:red">Ocupada</td>
        `;
    }else{
        linha.innerHTML = `
        <td>${i}</td>
        <td>-</td>
        <td> style="color:green">Disponível</td>
        `;
    }
    tabela.appendChild(linha);
}