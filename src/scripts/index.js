const slider = document.querySelectorAll('.slider')
const slider2 = document.querySelectorAll('.slider2')
const btPrev1 = document.getElementById('prev-button')
const btNext1 = document.getElementById('next-button')
const btPrev2 = document.getElementById('prev-button2')
const btNext2 = document.getElementById('next-button2')

let currentslide = 0;
let currentslide2 = 0;

function hideslider() {
    slider.forEach(item => item.classList.remove('on'))
}
function hideslider2() {
    slider2.forEach(item => item.classList.remove('on'))
}

function showslider() {
    slider[currentslide].classList.add('on')
}
function showslider2() {
    slider2[currentslide2].classList.add('on')
}

function nextSlider(){
    hideslider()
    if(currentslide == slider.length ){
        currentslide = 0
    } else {
        currentslide ++
    }
    showslider()
}
function nextSlider2(){
    hideslider2()
    if(currentslide2 == slider2.length ){
        currentslide2 = 0
    } else {
        currentslide2 ++
    }
    showslider2()
}

function prevSlider() {
    hideslider()
    if(currentslide == 0){
        currentslide = slider.length 
    } else {
        currentslide --
    }
    showslider()
}
function prevSlider2() {
    hideslider2()
    if(currentslide2 == 0){
        currentslide2 = slider2.length 
    } else {
        currentslide2 --
    }
    showslider2()
}

btNext1.addEventListener('click', nextSlider)
btPrev1.addEventListener('click', prevSlider)
btNext2.addEventListener('click', nextSlider2)
btPrev2.addEventListener('click', prevSlider2)



console.log(slider)