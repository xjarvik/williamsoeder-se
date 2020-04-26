const baseFirstNameLeftMobile = "12vw"
const baseFirstNameTopMobile = "38vh"
const baseLastNameLeftMobile = "24vw"
const baseLastNameTopMobile = "38vh"

document.addEventListener("DOMContentLoaded", function(event){
    if(window.innerWidth < 1000){
        if(navigator.userAgent.match(/Android/i)){
            document.getElementById("vl").style.top = "calc(38vh + 15vw - 30px)"
            document.getElementById("profile-picture").style.animation = "picture-reveal-android 0.6s"
            document.getElementById("profile-picture").style.animationDelay = "0.4s"
            document.getElementById("profile-picture").style.animationFillMode = "forwards"
        }
        setNamePositionMobile()
        animateNameMobile()
        showStartArrowMobile()
    }
    setSignGlowScrollMobile()
})

const setNamePositionMobile = function(){
    const frontTest = document.getElementById("test-0")
    frontTest.style.left = baseFirstNameLeftMobile
    frontTest.style.top = baseFirstNameTopMobile
    const frontTest2 = document.getElementById("test2-0")
    frontTest2.style.left = baseLastNameLeftMobile
    frontTest2.style.top = "calc(" + baseLastNameTopMobile + " + " + (window.innerWidth * 0.15) + "px + 7px)"
    for(let i = 1; i <= 20; i++){
        const test = document.getElementById("test-" + i.toString())
        test.style.left = "calc(" + baseFirstNameLeftMobile + " + " + (0.5 * ((i * (0.0012 * window.innerWidth)) - 1) * 2).toString() + "px)"
        test.style.top = "calc(" + baseFirstNameTopMobile + " - " + (0.5 * ((i * (0.0012 * window.innerWidth)) - 1) * 2).toString() + "px)"
        const test2 = document.getElementById("test2-" + i.toString())
        test2.style.left = "calc(" + baseLastNameLeftMobile + " + " + (0.5 * ((i * (0.0012 * window.innerWidth) * 2) - 1)).toString() + "px)"
        test2.style.top = "calc(" + baseLastNameTopMobile + " - " + (0.5 * ((i * (0.0012 * window.innerWidth) * 2) - 1)).toString() + "px + " + (window.innerWidth * 0.15) + "px + 7px)"
    }
}

const animateNameMobile = function(){
    animateNameNrMobile(1, function(){})
    setTimeout(function(){
        animateName2NrMobile(1, function(){})
    }, 150)
}

const animateNameNrMobile = function(nr, callback){
    if(nr <= 20){
        setTimeout(function(){
            const front = document.getElementById("test-0")
            const test = document.getElementById("test-" + nr.toString())
            test.classList.toggle("hidden")
            front.style.left = "calc(" + baseFirstNameLeftMobile + " + " + (0.5 * ((nr * (0.0012 * window.innerWidth) * 2) - 1)).toString() + "px)"
            front.style.top = "calc(" + baseFirstNameTopMobile + " - " + (0.5 * ((nr * (0.0012 * window.innerWidth) * 2) - 1)).toString() + "px)"
            animateNameNrMobile(nr + 1, function(){
                callback()
            })
        }, animationFrames[nr])
    }
    else{
        callback()
    }
}

const animateName2NrMobile = function(nr, callback){
    if(nr <= 20){
        setTimeout(function(){
            const front = document.getElementById("test2-0")
            const test = document.getElementById("test2-" + nr.toString())
            test.classList.toggle("hidden")
            front.style.left = "calc(" + baseLastNameLeftMobile + " + " + (0.5 * ((nr * (0.0012 * window.innerWidth) * 2) - 1)).toString() + "px)"
            front.style.top = "calc(" + baseLastNameTopMobile + " - " + (0.5 * ((nr * (0.0012 * window.innerWidth) * 2) - 1)).toString() + "px + " + (window.innerWidth * 0.15) + "px + 7px)"
            animateName2NrMobile(nr + 1, function(){
                callback()
            })
        }, animationFrames[nr])
    }
    else{
        callback()
    }
}

const showStartArrowMobile = function(){
    const arrow = document.getElementById("start-arrow")
    setTimeout(function(){
        arrow.style.opacity = "1"
        arrow.style.animation = "start-arrow-mover 2s infinite"
        arrow.addEventListener("click", function(event){
            document.getElementById("section-2").scrollIntoView({ behavior: "smooth" })
        })
    }, 2300)
}

const setSignGlowScrollMobile = function(){
    window.addEventListener("scroll", function(event){
        if(this.scrollY > (window.innerHeight * 0.5)){
            const signGlow = document.getElementById("sign-glow")
            signGlow.style.animation = "sign-glow-on 0.6s"
            signGlow.style.animationDelay = "2.85s"
            signGlow.style.animationFillMode = "forwards"
        }
    })
}