const umaTarefa = document.querySelector(".addTarefa__button");
const erro = document.querySelector(".meu-erro");
const NovasTarefas= document.querySelector(".tabela")


umaTarefa.addEventListener("click", function (evento) {

    let tarefa = document.getElementById('InputTarefa');
    let textoTarefa = tarefa.value;

    if (textoTarefa === "") {

        erro.textContent = "Digite uma nova tarefa."
        tarefa.value = ""
    }
    else {

        let NewText = document.createElement("il");

        NewText.textContent = textoTarefa;
        NovasTarefas.appendChild(NewText);

    }
});


const muitasTarefas = document.querySelectorAll(".tarefas")

muitasTarefas.forEach(function (excluir) {
    excluir.addEventListener("click", function (evento) {
        if (
            excluir.classList.contains("excluir")) {
            excluir.classList.remove("excluir");

        } else {
            excluir.classList.add("excluir");
        }

    })
});
