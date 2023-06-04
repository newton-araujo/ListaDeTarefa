let contador = 0
let input = document.getElementById('tarefas');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('areaLista');

function addTarefa() {
    let valorInput = input.value;

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = ` 
        <div class="item" id="${contador}">
        <div class="item-icone" onclick="tarefaOK(${contador})">
            <i class="pendencia" id="icone${contador}">Pendente</i>
        </div>
        <div class="item-nome" onclick="tarefaOk(${contador})" >
            ${valorInput}
        </div>
        <div class="botao">
            <button class="delete" onclick="deletar(${contador})"><i class="mdi mdi-delete"></i></button>
        </div>
    </div>`;
        //Adicionar novo item no main
        main.innerHTML += novoItem

        //Zerar campo

        input.value = ""
        input.focus();
    }
}

function tarefaOk(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class')
    let icone = document.getElementById('icone' + id)
    let aprovado = document.getElementsByClassName('pendencia')

    console.log(classe);

    if (classe === "item") {
        item.classList.add('itemCheck')
        icone.innerHTML = "Realizada"
    } else {
        item.classList.remove('itemCheck');
        icone.innerHTML = "Pendente"
    }
}
//Deletar
function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}




// função para add com o Enter(13);

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})

