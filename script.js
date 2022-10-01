textEl = document.getElementById('text')
speedEl = document.getElementById('speed')

text='Ja volim da programiram'
textPosition=1
speed = 500 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, textPosition)
    textPosition++
    if(textPosition > text.length){
        textPosition=1
    }
    setTimeout(writeText,speed)
}

speedEl.addEventListener('input' , (e) =>{
    speed=500/e.target.value
})