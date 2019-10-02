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
        

        const excluirButton = document.querySelector(".excluirTarefa__button")

        excluirButton.addEventListener("click", function (evento) {
            if (NewText.parentNode) {
                NewText.parentNode.removeChild(NewText);
            }
        })

        // const selectAllButton = document.querySelector(".tarefa")
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
 // selectAllButton.addEventListener("click", function(){
        //     selectAllButton.style.textDecoration = "none";
        //     selectAllButton.style.color = "black";
        // }) 