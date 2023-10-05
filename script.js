let offLed = document.querySelector('#offLed')
let onLed = document.querySelector('#onLed')
let brokenLed = 0
let led = document.querySelector('#led')

let burrytl = document.querySelector('#burrytl')
offLed.style.display = 'none'
burrytl.style.display = 'none'



//adicionando evento de click para o botao ligar
onLed.addEventListener('click', cleanLight)

//função que diz o que vai acontecer depois do click
function cleanLight(){
    led.src = "./onLed.jpg"

    offLed.style.display = 'block'
    onLed.style.display = 'none'
}

//adicionando evento de click para o botao desligar
offLed.addEventListener('click', burryTheLight)

//motivated
function burryTheLight(){
    led.src = "./offLed.jpg"

    offLed.style.display = 'none'
    onLed.style.display = 'block'
}

//adicionando evento de click para os clicks que quebram a lampada
led.addEventListener('click', brokenTheLight)

//função motivada
function brokenTheLight(){
    brokenLed++
    if(brokenLed === 3){
        led.src = "./brokenLed.jpg"
        alert('Broken the light deep within!')


        burrytl.play()

    offLed.style.display = 'none'
    onLed.style.display = 'none'
    }
}
/* 
Essas funções eram pra ligar e desligar a lampada com o passar  do mouse, mas resolvi nao colocar.
onLed.addEventListener('mouseover', cleanLight)
offLed.addEventListener('mouseover', burryTheLight) 
*/




/*
⠀⠀   ⢀⡴⠁⠀ ⣿⡏⠀⠱⣄
⠀⠀⢀⣴⡟⠁⠀⠀⠀⣿⡇⠀⠀⠀⠙⣷⣄
⠀⠀⠙⢿⣷⣄⠀⠀⠀⣿⡇⠀⠀⢀⣴⣿⠋
⠀⠀⠀⠀⠙⢿⣷⣄⠀⢻⡇⢀⣴⣿⠋
⠀⠀⠀⠀⠀⠀⠈⠻⣷⣾⣷⡿⠋
⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣷⣄
⠀⠀⠀⠀⠀⢀⣶⣿⠟⢹⣏⠻⢿⣷⣄
⠀⠀⠀⢀⣼⣿⠟⠁⠀⢸⣿⠀⠈⠙⢿⣷⣄
⠀⠀⣴⣿⡟⠁⠀⠀⠀⢸⣿⠀⠀⠀⠀⣹⣿⡷
⠀⠀⠈⠻⣿⣦⡀⠀⠀⢸⣿⠀⠀⢀⣼⣿⠏
⠀⠀⠀⠀⠈⠻⣿⣦⡀⢸⣿⠀⣴⣿⠟⠁
⠀⠀⠀⠀⠀⠀⠈⠻⣿⣾⣿⣾⡿⠃⠀
⠀⠀ ⠀⠀⠀⠀⠀⠀⠈⠻⡿⠋
"My honored brethen
We come together
To unite as one
Against those that are damned
We show no mercy
For we have none
Our enemies shall fall
As we uprise
To claim our fate
Now and forever
We'll be together
Love and hate"
*/