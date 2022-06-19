var botao = document.getElementById('clique');

botao.onclick = function(){
    if(botao.value === 'troca'){
        pers1.src = 'imgs/squircon.jpg ';
        botao.value = 'Retornar';
        botao.innerHTML = '戻る (Voltar)';
    }else{
        pers1.src = 'imgs/hancon.png';
        botao.value = 'troca';
        botao.innerHTML = '置換 (Trocar)';
    }
}