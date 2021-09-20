function inserirNaLista() {
    //Captar o que vem do input
    let input = document.querySelector('#item');
    //Colocar numa variável e pegar o valor
    let novoItem = input.value;
    //Como sabemos que é uma string, é possível usar o comando trim, que tira os espaços antes e depois das palavras. Se após o trim ficar vazio, executa o alerta.
    //if (novoItem.trim() == " "){
    //Ou se a quantidade de letras digitadas (length) for igual a zero, executa o alerta.
    if (novoItem.trim() == " ") {
        alert("Insira um item!");
        //return para sair da função e não continuar o que vem adiante. Se não há nada escrito, não há motivo para seguir.
        return;
    }
    criarOption(novoItem);

    //Criar uma variável que cria um novo elemento. Neste caso, será uma opção do select.
    //var novoOption = document.createElement('option');
    //Dentro do option, inserir o texto relativo ao novoItem
    //novoOption.innerText = novoItem;
    //Chama a lista do select e adiciona um novo option lá.
    //document.querySelector('#lista-itens').appendChild(novoOption);
        //ESTA PARTE ACIMA FOI TRANSFERIDA LÁ PARA BAIXO (função criarOption) DECORRENTE DA CRIAÇÃO DA FUNÇÃO LOAD. PARA NÃO FICAR DECLARADA DUAS VEZES, SUBSTITUÍMOS POR criarOption(novoItem) ALI EM CIMA.
}

function save() {
    //Selecionar todas as options inseridas no select
    let options = document.querySelectorAll('option')
    //Criar uma array para colocar essas options
    let lista = []
    //Para cada option das options, inseri-la no final da lista (array criada)
    for (let option of options) {
        //Só guardamos o innerText do option, não o option todo. Por isso, quando formos carregar a lista salva, pegaremos apenas o conteúdo do option.
        lista.push(option.innerText)
    }
    //Armazenar no local storage com o nome "lista"
    localStorage.setItem('lista', JSON.stringify(lista));
}

function load() {
    //Testar no Console (F12) colocando --> localStorage.getItem('lista'). Se não retornasse nada, retornaria nulo (ou seja, false).
    let lista = localStorage.getItem('lista')
    //Se for falso (se não houver lista salva no localStorage), alerta e retorna (acaba a execução).
    if (!lista) {
        alert ("Não há itens salvos!")
        return
    }
    //Se for true, transformar a lista em vetor de novo
    lista = JSON.parse(lista)
    //Para carregar a lista, precisa criar option novamente, só que desta vez não pegará o valor do input, e sim, da lista que está armazenada no local sotrage.
    for (let item of lista) {
        criarOption(item)
    }
}
//Função para carregar a lista salva --> Criar novamente as opções no select.
function criarOption(novoItem) {
    //O parâmetro novoItem precisa ser colocado aqui entre parênteses porque é uma variável que só se encontra na função inserirNaLista. Se tentasse acessar a função fora, não ia pegar, or isso eu preciso fazer esta referência.
    let novoOption = document.createElement('option')
    novoOption.innerText = novoItem
    document.querySelector('#lista-itens').appendChild(novoOption)
}

//Ação: Na hora que clicar no botão, irá executar a função do botão add --> adicionar novo item à lista
document.querySelector('#btn-add').addEventListener('click', inserirNaLista)
//Ação: Na hora que clicar no botão 'Salvar', irá executar a função save --> salvar a lista no local storage
document.querySelector('#btn-save').addEventListener('click', save)
//Ação: Na hora que clicar no botão 'Carregar', irá executar a função load --> carregar a lista do local storage
document.querySelector('#btn-load').addEventListener('click', load)
