const html = document.querySelector('html');
const sobreBtn = document.querySelector('.app__card-button--sobre');
const projetosBtn = document.querySelector('.app__card-button--projetos');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const conteudo = document.querySelector('.app__text-conteudo');

sobreBtn.addEventListener('click', ()=>{
    alterarContexto('sobre');
    sobreBtn.classList.add('active');
});

projetosBtn.addEventListener('click', ()=>{
    alterarContexto('projetos');
    projetosBtn.classList.add('active');
});

function alterarContexto(contexto){
    botoes.forEach(function (contexto){
        contexto.classList.remove('active')
    });
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);
    switch(contexto){     
        case "sobre":
                titulo.innerHTML = `Uma jornada pessoal e<br>
                <strong class="app__title-strong">profissional em destaque.</strong>`
                conteudo.innerHTML = `Olá, meu nome é Ricardo Peixoto da Silva, tenho 22 anos. <br>
                Nasci em Belo Horizonte, Minas Gerais. Cresci em uma <br> 
                cidade pequena de Justinópolis, munícipio de Ribeirão das Neves. <br><br>
                Estou no 4º semestre do curso de Análise e desenvolvimento de sistemas na PUC Minas. <br>
                Sou apaixonado por tecnologia e gosto muito de programação. Me identifico mais <br> 
                com Front-end, porém consigo me virar no Back-end. <br><br>
                Tenho conhecimento nas linguagens e tecnologias a seguir: <br>
                HTML, CSS, JavaScript, React, ReactNative, C#, SQL. <br><br>
                Sou uma pessoa calma e tranquila, sou bem reservado, porém quando conheço mais as <br>
                pessoas, me solto bastante. Não tenho dificuldade em aceitar críticas e sugestões, <br>
                pelo contrário, gosto de receber um feedback para saber como estou indo e o <br>
                que devo fazer para melhorar. Sou um bom ouvinte e gosto muito de aprender!`
            break;

        case "projetos":
            titulo.innerHTML = `Dê uma olhada nos meus
            <strong class="app__title-strong"> projetos recentes! </strong>`
            conteudo.innerHTML = `Dê uma olhada nos vídeos:`

            break;             
        default:
            break;
    }
};