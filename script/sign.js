
let form = document.querySelector("form");
let heading = document.querySelector("h1");
let LSdata = JSON.parse(localStorage.getItem("data"));
if(LSdata == null){LSdata=[]}
form.addEventListener("submit",function(e){
    e.preventDefault()
    let obj = {
        firstname : namefirst.value,
        lastname : namelast.value,
        email : email.value,
        password : password.value
    }
    if(namefirst.value === ""){
        heading.innerText = "Enter Details"
    }else if(namefirst.value !== "" && namefirst.value !== "" && namelast.value !== "" && email.value !== "" &&  password.value !== ""){
        heading.innerText = "Credential Accepted"
        LSdata.push(obj);
        localStorage.setItem("data",JSON.stringify(LSdata))
        setInterval(function(){
            window.location.href = "login.html"; 
        },2000)
        
    }
})