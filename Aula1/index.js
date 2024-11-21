'use scritct';

const botao = document.querySelector('.btn');

botao.addEventListener('click',()=>{
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');


//toggle remove se esta presente, adicona se nao esta - faz a troca

//agora vai mudar a cor do botao conforme os cliques
const nameClassAtualBotao = document.body.className;
if(nameClassAtualBotao == 'light-theme'){
    botao.textContent = 'Dark';
}else{
    botao.textContent = 'Light'
}
});