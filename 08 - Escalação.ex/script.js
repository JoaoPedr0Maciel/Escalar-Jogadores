const nome = document.getElementById('name');
const position = document.getElementById('position');
const num = document.getElementById('num');
const escalar = document.getElementById('escalar');
const show = document.getElementById('show');
const result = document.getElementById('res');
const remover = document.getElementById('remover')


let players = [];


escalar.addEventListener('click', () => {
    if (nome.value !== '') {

        let newPlayer = {
            nome: nome.value,
            posição: position.value,
            numero: num.value
        }

        players.push(newPlayer);
        result.classList.remove('hidden');
        result.innerHTML = 'Jogador escalado com sucesso';

        nome.value = ''
        position.value = ''
        num.value = ''
    } else {
        result.classList.remove('hidden');
        result.innerHTML = 'Verifique os campos e preencha corretamente!';
    }

})


show.addEventListener('click', () => {

    if (players.length !== 0) {
        let playersDatails = '';
        for (let i = 0; i < players.length; i++) {
            playersDatails += `Nome: ${players[i].nome}<br>Posição: ${players[i].posição}<br>Número: ${players[i].numero}<br><br>`;
        }
        result.innerHTML = playersDatails;

    } else {
        result.classList.remove('hidden');
        result.innerHTML = 'Não há jogadores cadastrados';
    }

})


remover.addEventListener('click', () => {
    if(nome.value !== '') {
        players = players.filter(player => player.nome !== nome.value)
        result.innerHTML = 'Jogador removido com sucesso'
    } else {
        result.innerHTML = 'Preencha o nome do jogador para remove-lo'
    }
})