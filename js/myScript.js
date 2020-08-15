let altura
let largura
let vidas = 3
let heart
let tempo = 10

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
            this.remove()
            PontuaMosquito()
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

function gameOver(){
    window.location.href = 'game_over.html'
}

function PontuaMosquito(){
    console.log('100 pontos')
}

function Cronometro(){
    let timer = document.querySelector('#cronometro')
    timer.innerHTML = tempo
    tempo--
    if(tempo == 0 && vidas == 0){
        gameOver()
    }
    else if(tempo == 0){
        console.log('Você Venceu')
    }
}

atualizaDimensaoTela()
let mosquitos = setInterval(criaMosquito, 10000)
let cronometro = setInterval(Cronometro, 1000)