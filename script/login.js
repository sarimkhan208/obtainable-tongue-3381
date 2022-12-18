console.log("ok")
let form = document.querySelector("form");
let heading = document.querySelector("h1");
let ogCred = JSON.parse(localStorage.getItem("data"))

form.addEventListener("submit",function(e){
    e.preventDefault();
    let applyobj = {
        email : form.email.value,
        password : form.password.value
    }
    let flag = false;
    ogCred.forEach(function(ele,index){
    if(ele.email === applyobj.email && ele.password === applyobj.password){
        heading.innerText = "Sign in Successful"
        flag = true;
        setInterval(function(){
            localStorage.setItem("login",true)
            window.location.href = "index.html";
        },2000)
         
    }
    })
    if(flag == false){
    heading.innerText = "Wrong Credentials"
    }
})