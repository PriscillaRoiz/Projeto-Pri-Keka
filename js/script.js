const umaTarefa = document.querySelector(".addTarefa__button");
const erro = document.querySelector(".meu-erro");
const NovasTarefas = document.querySelector(".tarefa")


umaTarefa.addEventListener("click", function (evento) {

    let tarefa = document.getElementById('InputTarefa');
    let textoTarefa = tarefa.value;

    if (textoTarefa === "") {

        erro.textContent = "Digite uma nova tarefa."
    } else {

        let NewText = document.createElement("li");

        NewText.textContent = textoTarefa;
        NovasTarefas.appendChild(NewText);
        tarefa.value = ""
        erro.textContent = "";
    
        let ButtonX = document.createElement("span");
        NewText.appendChild(ButtonX);
        ButtonX.textContent = "x";
        ButtonX.classList.add("ButtonX")

        ButtonX.addEventListener("click",function(evento) {
        if (ButtonX.parentNode) {
            NovasTarefas.removeChild(NewText);
            ButtonX.textContent = "";
        }
        });


        const excluirButton = document.querySelector(".excluirTarefa__button")

        excluirButton.addEventListener("click", function (evento) {
            if (NewText.parentNode) {
                NewText.parentNode.removeChild(NewText);
            }
        });

        const riscarTarefa = document.querySelector('.tarefa')


        NewText.addEventListener("click", function (evento) {
          if(NewText.style.textDecoration == "line-through"){
            NewText.style.textDecoration = "none";
            NewText.style.color = "black";
          } else{
            NewText.style.color = "grey";   
            NewText.style.textDecoration = "line-through";
          }
           
        });

    }

});
