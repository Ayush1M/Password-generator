const Btn = document.getElementById("btn")
const passwordDisplay1 = document.getElementById("passworddisplay1")
const passwordDisplay2 = document.getElementById("passworddisplay2")
const passwordDisplay3 = document.getElementById("passworddisplay3")
const passwordDisplay4 = document.getElementById("passworddisplay4")

Btn.addEventListener('click', () =>{
    
    const password = generatePassword() 
})

function generatePassword(){
    
    let randomChar = "abcdefghijklmnopqrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}[]<>?"
    let password =""
    for(let i = 0; i < 5; i++){
       password = password + randomChar.charAt(Math.floor(Math.random()* Math.floor(randomChar.length - 1)))
    } 
    return password
}

function displayPassword(){
    passwordDisplay1.textContent = generatePassword()
    passwordDisplay2.textContent = generatePassword()
    passwordDisplay3.textContent = generatePassword()
    passwordDisplay4.textContent = generatePassword()
}