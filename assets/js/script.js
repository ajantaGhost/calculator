let lightMode=document.querySelector('#lightMode');
let icons=document.querySelectorAll('svg');
let currentMode="light";
lightMode.addEventListener("click",()=>{
    if(currentMode==="light"){
        currentMode="dark";
        document.querySelector(".container").style.backgroundColor
        ="rgba(0, 0, 0, 0.920)";
        if(currentMode=== "dark"){
            icons.forEach(icon=>{
                icon.fill="white";
            });
        }
    }
    else{
        currentMode="light";
        document.querySelector(".container").style.backgroundColor="white";
        if(currentMode=== "light"){
            icons.forEach(icon=>{
                icon.fill= "black";
            });
        }
    }
});

let display = document.getElementById('displayBox');
let buttons = document.querySelectorAll('button');
let string = "";
let btnArray = Array.from(buttons);
btnArray.forEach(btn =>{
    btn.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string= eval(string);
            display.value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            display.value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            display.value = string;
        }
        else{
            string+= e.target.innerHTML;
            display.value = string;
        }
    })
})
