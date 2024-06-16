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






document.addEventListener('keydown', function(event) {
    if (event.key === "q") {
        let newdiv = document.createElement('div');
        const body = document.querySelector("body"); 
        body.appendChild(newdiv); 
        newdiv.style.width = "200px";
        newdiv.style.height = "200px";
        newdiv.style.backgroundColor = "purple";
    }
});
