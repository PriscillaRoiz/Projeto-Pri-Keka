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
        tarefa.value = "";
        erro.textContent = "";
        NewText.setAttribute("draggable",true)  

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
          if(NewText.style.textDecoration == "line-through"){
            NewText.style.textDecoration = "none";
          } else{
            NewText.style.color = "grey";   
            NewText.style.textDecoration = "line-through";
          }
        });

        const SelectAll = document.querySelector(".SelecionarAll__button")

        SelectAll.addEventListener("click", function (evento) {
          if (NewText.style.backgroundColor == "white"){
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
        
        var dragged;

        /* events fired on the draggable target */
        document.addEventListener("drag", function(event) {
        
        }, false);
        
        document.addEventListener("dragstart", function(event) {
          // store a ref. on the dragged elem
          NewText = event.target;
          // make it half transparent
          event.target.style.opacity = .5;
        }, false);
        
        document.addEventListener("dragend", function(event) {
          // reset the transparency
          event.target.style.opacity = "";
        }, false);
        
        /* events fired on the drop targets */
        document.addEventListener("dragover", function(event) {
          // prevent default to allow drop
          NovasTarefas.preventDefault();
        }, false);
        
        document.addEventListener("dragenter", function(event) {
          // highlight potential drop target when the draggable element enters it
          if (event.target.className == "tarefa") {
            event.target.style.background = "purple";
          }
        
        }, false);
        
        document.addEventListener("dragleave", function(event) {
          // reset background of potential drop target when the draggable element leaves it
          if (event.target.className == "tarefa") {
            event.target.style.background = "";
          }
        
        }, false);
        
        document.addEventListener("drop", function(event) {
          // prevent default action (open as link for some elements)
          event.preventDefault();
          // move NewText elem to the selected drop target
          if (event.target.className == "tarefa") {
            event.target.style.background = "";
            NewText.parentNode.removeChild( NewText );
            event.target.appendChild( NewText );
          }
        }, false);

    }

});
