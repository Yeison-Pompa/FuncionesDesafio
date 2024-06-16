document.addEventListener('keydown',function (event) {
    if (event.key === "a") {
        let div = document.querySelector("div")
        div.style.backgroundColor="pink"
        
    }else if (event.key === "s") {
        let div = document.querySelector("div")
        div.style.backgroundColor="orange"
    }else if (event.key === "d") {
        let div = document.querySelector("div")
        div.style.backgroundColor="Skyblue"
    }else{
        let div = document.querySelector("div")
        div.style.backgroundColor="" 
    }
    
})