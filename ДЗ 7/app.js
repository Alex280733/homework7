'use strict'

let a = [2, 6, 34, 'a', 'b', 'c']

for (let i = 0; i < a.length; i++) {
    if ((i+1)%2 == 0 ) {
        console.log(a[i])
    }
}

let b = ['text1','text2','text3','text4','text5']

function text(textContainer,){
    let texty = document.querySelector('#' + textContainer)
    texty.textContent = textContainer
}

for (let f = 0; f < b.length; f++) {

    text(b[f])
}