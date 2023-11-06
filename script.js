function run() {

    let htmlCode = document.getElementById('html-code')

    let cssCode = document.getElementById('css-code')

    let jsCode = document.getElementById('js-code')

    let output = document.getElementById('output')

    output.contentDocument.body.innerHTML =
        htmlCode.value +
        "<style>" + cssCode.value + "</style>";
    output.contentWindow.eval(jsCode.value)
}

let htmlCode = document.getElementById('html-code')
let cssCode = document.getElementById('css-code')
let jsCode = document.getElementById('js-code')

const toggle_btn = document.querySelector('#checkbox')

const main = document.querySelector('.main')
const container = document.querySelector('.container')
const btn_container = document.querySelector('.btn-container')
const left = document.querySelector('.left')
const textArea = document.getElementsByClassName('in')

    const lightBackground = '#F8DAC9';
    const darkBackground = '#212121';
    const lightText = 'white';
    const darkText = 'black';

toggle_btn.addEventListener('change', () =>{
    if(toggle_btn.checked){
        container.style.backgroundColor = lightBackground
        btn_container.style.backgroundColor = lightBackground
        document.body.style.backgroundColor = lightText
        document.body.style.color = darkText
        main.style.backgroundColor = '#060320'
        main.style.color = '#fff'
        htmlCode.style.backgroundColor = '#FDF3ED'
        htmlCode.style.color = darkText 
        cssCode.style.backgroundColor = '#FDF3ED'
        cssCode.style.color = darkText 
        jsCode.style.backgroundColor = '#FDF3ED'
        jsCode.style.color = darkText 

    }
    else{
        container.style.backgroundColor = darkBackground
        btn_container.style.backgroundColor = darkBackground
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
        main.style.backgroundColor = '#060320'
        htmlCode.style.backgroundColor = darkBackground
        htmlCode.style.color = lightBackground
        cssCode.style.backgroundColor = darkBackground
        cssCode.style.color = lightBackground
        jsCode.style.backgroundColor = darkBackground
        jsCode.style.color = lightBackground
    }
})


