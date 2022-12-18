
let body = document.querySelector("body")
let form = document.querySelector("form");
let heading = document.querySelector("h1");
let radio = document.getElementById("cidi")
form.addEventListener("submit",function(e){
    e.preventDefault()
    if(form.name.value === "" || form.address.value === ""){
        heading.innerText = "Enter Full Details"
    }else if(form.name.value != ""  && form.address.value != "" &&  (form.upi.value != "" || form.card.value != "" || radio.checked)){
        // heading.innerText = "Credential Accepted"
        setInterval(function(){
            body.innerHTML = null
            body.style.backgroundColor = "#F5F5F5"
            let box = document.createElement("div")
            box.setAttribute("id","box");
            let image = document.createElement("img")
            image.setAttribute("src","https://imgs.search.brave.com/e_WboFQ0mGdPs9Cm5w24OEhMCVUSICqqtMS75hfVeVE/rs:fit:860:900:1/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzEwNi0x/MDY0OTAyX3RyYW5z/cGFyZW50LWNoZWNr/LW1hcmstZ2lmLXBu/Zy1kb3dubG9hZC1k/b25lLWljb24ucG5n")
            image.setAttribute("id","tick")
            let h1 = document.createElement("h1")
            h1.setAttribute("id","h1");
            h1.innerText = "YAY! Your Order has been placed "
            box.append(image,h1)
            body.append(box)
        },2000)
    }
})

