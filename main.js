const animationFrames = [0, 0, 150, 65, 45, 22, 15, 12, 12, 12, 12, 12, 12, 12, 12, 12, 15, 18, 25, 50, 75]
const helloLinesPos = [83.5, 119.5, 149.5, 184.5, 219.5, 249.5, 279.5]
const helloLinesWait = [150, 400, 250, 125, 250, 175, 350]
const hello = "Hello!"
var helloMoved = false
const baseFirstNameLeft = 380
const baseFirstNameTop = 150
const baseLastNameLeft = 488
const baseLastNameTop = 230

document.addEventListener("DOMContentLoaded", function(event){
    if(window.innerWidth >= 1000){
        setNamePosition()
        animateName()
        showStartArrow()
    }
    setSignGlowScroll()
    setSignPosition()
    setInfoSectionHeight()
})

const setNamePosition = function(){
    const frontTest = document.getElementById("test-0")
    frontTest.style.left = "calc(50vw - " + (768 - (baseFirstNameLeft)).toString() + "px)"
    frontTest.style.top = "calc(50vh - " + (362 - (baseFirstNameTop)).toString() + "px)"
    const frontTest2 = document.getElementById("test2-0")
    frontTest2.style.left = "calc(50vw - " + (768 - (baseLastNameLeft)).toString() + "px)"
    frontTest2.style.top = "calc(50vh - " + (362 - (baseLastNameTop)).toString() + "px)"
    for(let i = 1; i <= 20; i++){
        const test = document.getElementById("test-" + i.toString())
        test.style.left = "calc(50vw - " + (768 - (baseFirstNameLeft + (0.5 * (i - 1)))).toString() + "px)"
        test.style.top = "calc(50vh - " + (362 - (baseFirstNameTop - (0.5 * (i - 1)))).toString() + "px)"
        const test2 = document.getElementById("test2-" + i.toString())
        test2.style.left = "calc(50vw - " + (768 - (baseLastNameLeft + (0.5 * (i - 1)))).toString() + "px)"
        test2.style.top = "calc(50vh - " + (362 - (baseLastNameTop - (0.5 * (i - 1)))).toString() + "px)"
    }
}

const animateName = function(){
    animateNameNr(1, function(){})
    setTimeout(function(){
        animateName2Nr(1, function(){})
    }, 150)
}

const animateNameNr = function(nr, callback){
    if(nr <= 20){
        setTimeout(function(){
            const front = document.getElementById("test-0")
            const test = document.getElementById("test-" + nr.toString())
            test.classList.toggle("hidden")
            front.style.left = "calc(50vw - " + (768 - (baseFirstNameLeft + (0.5 * (nr - 1)))).toString() + "px)"
            front.style.top = "calc(50vh - " + (362 - (baseFirstNameTop - (0.5 * (nr - 1)))).toString() + "px)"
            animateNameNr(nr + 1, function(){
                callback()
            })
        }, animationFrames[nr])
    }
    else{
        callback()
    }
}

const animateName2Nr = function(nr, callback){
    if(nr <= 20){
        setTimeout(function(){
            const front = document.getElementById("test2-0")
            const test = document.getElementById("test2-" + nr.toString())
            test.classList.toggle("hidden")
            front.style.left = "calc(50vw - " + (768 - (baseLastNameLeft + (0.5 * (nr - 1)))).toString() + "px)"
            front.style.top = "calc(50vh - " + (362 - (baseLastNameTop - (0.5 * (nr - 1)))).toString() + "px)"
            animateName2Nr(nr + 1, function(){
                callback()
            })
        }, animationFrames[nr])
    }
    else{
        callback()
    }
}

const showStartArrow = function(){
    const arrow = document.getElementById("start-arrow")
    setTimeout(function(){
        arrow.style.opacity = "1"
        arrow.style.animation = "start-arrow-mover 2s infinite"
        arrow.addEventListener("click", function(event){
            document.getElementById("section-2").scrollIntoView({ behavior: "smooth" })
        })
    }, 2300)
}

const setSignGlowScroll = function(){
    window.addEventListener("scroll", function(event){
        if(this.scrollY > (window.innerHeight * 0.5)){
            const signGlow = document.getElementById("sign-glow")
            signGlow.style.animation = "sign-glow-on 0.4s"
            signGlow.style.animationDelay = "2.85s"
            signGlow.style.animationFillMode = "forwards"
            if(!helloMoved){
                helloMoved = true
                moveHelloLine(0, function(){})
                revealInfo()
            }
        }
    })
}

const moveHelloLine = function(nr, callback){
    if(nr < helloLinesWait.length){
        const line = document.getElementById("hello-divider")
        const text = document.getElementById("hello")
        setTimeout(function(){
            line.style.left = "calc(33.8vw + " + helloLinesPos[nr] + "px)"
            text.innerText = hello.substr(0, nr)
            moveHelloLine(nr + 1, function(){
                callback()
            })
        }, helloLinesWait[nr])
    }
    else{
        callback()
    }
}

const revealInfo = function(){
    const info = document.getElementById("info-text")
    info.style.animation = "info-reveal 0.5s"
    info.style.animationDelay = "2s"
    info.style.animationFillMode = "forwards"
}

const setSignPosition = function(){
    const sign = document.getElementById("sign")
    const signGlow = document.getElementById("sign-glow")
    if(window.innerWidth >= 2094){
        sign.style.left = "calc(33.8vw - 330.9px)"
        signGlow.style.left = "calc(33.8vw - 330.9px)"
    }
}

const setInfoSectionHeight = function(){
    const infoText = document.getElementById("info-text")
    const info = document.getElementById("info")
    const section2 = document.getElementById("section-2")
    const gradient = document.getElementById("gradient")
    
    const height = infoText.clientHeight + 325
    info.style.height = "calc(" + height + "px - 80px)"
    section2.style.height = height + "px"
    if(height < (window.innerHeight)){
        gradient.style.height = "100vh"
    }
    else{
        gradient.style.height = height + "px"
    }
}