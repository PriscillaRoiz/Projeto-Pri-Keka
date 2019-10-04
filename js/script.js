const umaTarefa = document.querySelector(".addTarefa__button");
const erro = document.querySelector(".meu-erro");
const NovasTarefas = document.querySelector(".tarefa")


umaTarefa.addEventListener("click", function (evento) {
    evento.preventDefault();
    let tarefa = document.getElementById('InputTarefa');
    let textoTarefa = tarefa.value;

    if (textoTarefa.trim() === "") {
        erro.textContent = "Digite uma nova tarefa."
    } else {

        let NewText = document.createElement("li");

        NewText.textContent = textoTarefa;
        NovasTarefas.appendChild(NewText);
        tarefa.value = "";
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

        NewText.addEventListener("click", function (evento) {
          evento.preventDefault();
          if(NewText.style.textDecoration == "line-through"){
            NewText.style.textDecoration = "none";
            NewText.style.color = "black";
          } else{
            NewText.style.color = "grey";   
            NewText.style.textDecoration = "line-through";
          }
        });

        const SelectAll = document.querySelector(".SelecionarAll__button")

        SelectAll.addEventListener("click", function (evento) {
          evento.preventDefault();
          if (NewText.style.backgroundColor == "pink"){
            NewText.style.backgroundColor = "none";

          } else { 
            NewText.style.backgroundColor = "rgba(61, 161, 61, 0.644)";
            
        }
        });


        const excluirButton = document.querySelector(".excluirTarefa__button")

        excluirButton.addEventListener("click", function (evento) {
            if (NewText.parentNode) {
                NewText.parentNode.removeChild(NewText);
            }
        });


        $(function() {
            $( "NovasTarefas" ).sortable();
            $( "NovasTarefas" ).disableSelection();
          });
          
    }


});
