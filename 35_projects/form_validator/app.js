const form= document.querySelector("#form");
const username= document.querySelector("#username");
const email= document.querySelector("#email")
const password= document.querySelector("#pass")

function eventlistener(){
    form.addEventListener("submit", giris);
}

function giris(e){
    if (username.value=='') {
        username.classList.add("is-invalid")        
    }else{username.classList.add("is-valid")    }
    
    if (email.value=='') {
        email.classList.add("is-invalid")        
    }else{email.classList.add("is-valid")    }
    
    
    e.preventDefault();
    console.log("form submit edildi.")
}

eventlistener();