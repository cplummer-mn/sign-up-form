const passwordOne = document.querySelector('#password');
const passwordTwo = document.querySelector('#password-confirm');


const passwordInfoText = document.querySelector('#password-info-text');


function showPass() {
    return passwordOne.value + passwordTwo.value;
}


function checkPass() {
    if(passwordOne.value !== "" && passwordTwo.value !== "") {
        if(passwordOne.value !== passwordTwo.value) {
            passwordInfoText.textContent = 'PASSWORDS DO NOT MATCH'
        }
    }
}

passwordTwo.addEventListener('input', () => {
    if(passwordOne.value !== "" && passwordTwo.value !== "") {
        if(passwordOne.value == passwordTwo.value) {
            passwordInfoText.style.display = 'none'
            passwordTwo.style.border = '1px solid #D6D9DC';
            passwordTwo.style.color =  'black';
        }
        else {
            passwordInfoText.style.display = 'block'
            passwordTwo.style.border = '3px solid #ff0004';
            passwordTwo.style.color =  '#D55C5F';
            passwordInfoText.textContent = 'PASSWORDS DO NOT MATCH'
        }

    }
})


