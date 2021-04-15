let altura
let largura
let vidas = 3
let heart
let pontos = 0
let tempo = 10
let criaMosquitoTempo = 1500
/*variável cronometro com função que repete a cada segundo no setInterval, decrementando a variável tempo e atualizando os dados na tela.*/
let cronometro = setInterval(function() {
        let timer = document.querySelector('#cronometro')
        tempo --
        if(tempo < 0){//se tempo é menor que zero, vence o jogo
            clearInterval(cronometro) //para a função setInterval do cronometro
            clearInterval(criaMosquitos) //para a função setInterval de cria mosquitos
            window.location.href = 'winner.html'
        }
        else{//caso contrário, continua o cronômetro até acabar as vidas ou zerar
            timer.innerHTML = tempo
        }
},1000)//repete a cada segundo

/* DIFICULDADE */
let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'facil')
{
    criaMosquitoTempo = 2000
}else if(nivel === 'normal')
{
    criaMosquitoTempo = 1500
}else if(nivel === 'dificil')
{
    criaMosquitoTempo = 1000
}else if(nivel === 'chucknorris'){
    criaMosquitoTempo = 500
}

function atualizaDimensaoTela(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

function criaMosquito(){
    let mosquitoExiste = document.querySelector('#mosquito')
    if(mosquitoExiste){
        mataMosquito()
        removeVida()
    }

    let positionX = Math.floor(Math.random() * largura) - 110
    let positionY = Math.floor(Math.random() * altura) - 110
    
    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    if(vidas > 0){
        let mosquito = window.document.createElement('img')
        mosquito.setAttribute('src', 'imagens/mosquito.png')
        mosquito.className = tamanhoMosquitoAleatorio()
        mosquito.style.left = positionX + 'px'
        mosquito.style.top = positionY + 'px'
        mosquito.style.transform = ladoMosquito()
        mosquito.id = 'mosquito'
        //mosquito.setAttribute('onclick', 'PontuaMosquito()')
        mosquito.onclick = function(){
            PontuaMosquito()
            this.remove()
            
        }
        document.body.appendChild(mosquito)
    }
}

function tamanhoMosquitoAleatorio(){
    let randomClass = Math.floor(Math.random() * 3) + 1

    switch(randomClass){
        case 1: return 'mosquito1'
        case 2: return  'mosquito2'
        case 3: return  'mosquito3'
    }
}

function ladoMosquito(){
    let randomSide = Math.floor(Math.random() * 2)
    if(randomSide == 0){
        return 'scaleX(-1)'
    }else{
        return 'scaleX(1)'
    }
}

function mataMosquito(){
    let mosquito = document.querySelector('#mosquito')
    mosquito.remove()
}

function removeVida(){
    heart = document.querySelector('#vida' + vidas)
    heart.src = 'imagens/coracao_vazio.png'
    vidas --
    if(vidas == 0){
        gameOver()
    }
}

/*Função chamada pela removeVida ao terminar todas as vidas do player */
function gameOver(){
    window.location.href = 'game_over.html'
}

/* pontua o jogador de acordo com o tamanho do mosquito */
function PontuaMosquito(){
    let mosquito = document.querySelector('#mosquito')
    console.log(pontos)
    if(mosquito.className == 'mosquito1')
        pontos  += 100;
    else if(mosquito.className == 'mosquito2')
        pontos += 200;
    else
        pontos += 300;
}

atualizaDimensaoTela()
let criaMosquitos = setInterval(criaMosquito, criaMosquitoTempo)