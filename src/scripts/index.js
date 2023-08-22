const slider = document.querySelectorAll('.slider')
const btPrev = document.getElementById('prev-button')
const btNext = document.getElementById('next-button')

let currentslide = 0;

function hideslider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showslider() {
    slider[currentslide].classList.add('on')
}

function nextSlider(){
    hideslider()
    if(currentslide == slider.length -1){
        currentslide = 0
    } else {
        currentslide ++
    }
    showslider()
}

function prevSlider() {
    hideslider()
    if(currentslide == 0){
        currentslide = slider.length -1
    } else {
        currentslide --
    }
    showslider()
}

btNext.addEventListener('click', nextSlider)
btPrev.addEventListener('click', prevSlider)

console.log(slider)