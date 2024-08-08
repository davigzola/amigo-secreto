let listaSorteados = [];

function embaralharLista(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function adicionar() {
    let listaAmigos = document.getElementById('lista-amigos');
    let amigoAdicionado = document.getElementById('nome-amigo').value;

    if(listaSorteados.includes(amigoAdicionado)) {
        alert('Esse nome já foi adicionado!');
    } else if (amigoAdicionado == '') {
        alert('Digite o nome do amigo para adicionar!')
    } else {
        {
            if(listaAmigos.textContent == '') {
                listaAmigos.textContent = amigoAdicionado;
            } else {
                listaAmigos.textContent = listaAmigos.textContent + ', ' + amigoAdicionado;
            }
        
            listaSorteados.push(amigoAdicionado);
            document.getElementById('nome-amigo').value ='';
        }
    }
}

function sortear() {
    if(listaSorteados.length < 4) {
        alert('São necessários ao menos 4 nomes para realizar o sorteio!');
    } else {
        let listaSorteio = document.getElementById('lista-sorteio');
        embaralharLista(listaSorteados);

        for(let i = 0; i < listaSorteados.length; i++) {
            if(i == listaSorteados.length - 1) {
                listaSorteio.innerHTML = listaSorteio.innerHTML + listaSorteados[i] + ' -> ' + listaSorteados[0] + '<br>';
            } else {
                listaSorteio.innerHTML = listaSorteio.innerHTML + listaSorteados[i] + ' -> ' + listaSorteados[i + 1] + '<br>';
            }
        }
    }
}

function reiniciar() {
    listaSorteados = [];
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}