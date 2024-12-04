const displayBox = document.getElementById('displayBox');
const buttons = document.querySelectorAll('button');
const lightModeButton = document.getElementById('lightMode');
const modeIcon = document.getElementById('modeIcon');
const body = document.body;
let string = "";
let btnArray = Array.from(buttons);
btnArray.forEach(btn =>{
    btn.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            try{
                string= eval(string);
                displayBox.value = string;
            }
            catch (error) {
                displayBox.value = 'Error';
            }
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            displayBox.value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            displayBox.value = string;
        }
        else{
            string+= e.target.innerHTML;
            displayBox.value = string;
        }
    });
});
lightModeButton.addEventListener('click', () => {
    body.classList.toggle('darkMode'); 
    if (body.classList.contains('darkMode')) {
        modeIcon.innerHTML=`<path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path>`;
    } else {
        modeIcon.innerHTML=`<path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>`;
    }
});