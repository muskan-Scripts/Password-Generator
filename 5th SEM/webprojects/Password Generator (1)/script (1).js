let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");
let copyicon = document.getElementById("copyicon");

slidervalue.textContent = inputslider.value;
inputslider.addEventListener('input', ()=>{
    slidervalue.textContent= inputslider.value;
});

genbtn.addEventListener('click', ()=>{
    passbox.value = generatePassword();
    
});

var lowercars = "abcdefghijklmnopqrstuvwxyz";
var uppercars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var allnums = "0123456789";
var allsyms = "~!@#$%^&*";

function generatePassword(){
    let genpass = "";
    let allchars = "";

    allchars += lowercase.checked ? lowercars : "";
    allchars += uppercase.checked ? uppercars : "";
    allchars += numbers.checked ? allnums : "";
    allchars += symbols.checked ? allsyms : "";

    if(allchars == "" || allchars.length == 0){
        return genpass;
    }

    let i=1;
    while(i<=inputslider.value){
        genpass+= allchars.charAt(Math.floor(Math.random() * allchars.length));
        i++;
    }

    return genpass;
}

copyicon.addEventListener('click', ()=>{
    if(passbox.value != "" || passbox.value.length >=1){
        navigator.clipboard.writeText(passbox.value);
        copyicon.innerText = "check";
        copyicon.title = "Password Copied";

        setTimeout(()=>{
            copyicon.innerHTML = "content_copy";
            copyicon.title = "";
        }, 3000)
    }
});