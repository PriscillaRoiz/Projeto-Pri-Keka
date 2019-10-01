const umaTarefa = document.querySelector(".addTarefa__button");

const erro = document.querySelector(".meu-erro")

umaTarefa.addEventListener("click", function (evento) {

    let tarefa = document.getElementById('InputTarefa');
    let textoTarefa = tarefa.value;


    const novaTarefa = document.createElement("p");
    novaTarefa.textContent = tarefa;
    novaTarefa.classList.add("tarefa")
    console.log(textoTarefa);

    if (textoTarefa === ""){

        erro.textContent = "Digite uma nova tarefa."

    }
    else {
     
        let NewText = document.createElement("p");

        NewText.textContent = textoTarefa;
        listaDeTarefas.appendChild(NewText);
        NewText.classList.add("tarefas");

    }
    tarefa.value = ""
});


const muitasTarefas = document.querySelectorAll(".tarefas")

muitasTarefas.forEach(function(excluir){
    excluir.addEventListener("click", function(evento)
    {if (
        excluir.classList.contains("excluir")){
        excluir.classList.remove("excluir");

    } else {
        excluir.classList.add("excluir");
    }

    })
});
