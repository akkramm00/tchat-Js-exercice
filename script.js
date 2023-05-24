// Participant 1
const login1 =document.getElementById("login1")
const message1 = document.querySelector("#message1")
const btnsend1 = document.querySelector("#btn-send1")

// Particpant 2
const login2 = document.getElementById("login2")
const message2 = document.querySelector("#message2")
const btnsend2 = document.querySelector("#btn-send2")

// Zone d'affichage
const dispalyText = document.getElementById("display-text")

// Boutons d'action
const reset = document.getElementById("reset")
const stop = document.getElementById("stop")

btnsend1.addEventListener('click', () => setTimeout(function(e){
    displayMessage1(e)
}, 2000))
btnsend2.addEventListener('click', () => setTimeout(function(e){
    displayMessage2(e)
}, 2000))

function displayMessage1(e) {
    dispalyText.innerHTML += '<p class="message">'+login1.value+' dit '+message1.value+'</p>'
}
function displayMessage2(e) {
    dispalyText.innerHTML += '<p class="message">'+login2.value+' dit '+message2.value+'</p>'
}

btnreset.addEventListener('click', reset)

function reset() {
    dispalyText.innerHTML = ''
}

stop.addEventListener('click', stopMessage)
function stopMessage(e) {
    e.preventDefault()
    btnsend2.setAttribute('disabled', 'disabled')
    btnsend2.removeEventListener('click', displayMessage2)
}