const slider = document.querySelectorAll('.slider')

const btPrev1 = document.getElementById('prev-button')
const btNext1 = document.getElementById('next-button')

let currentslide = 0;

function hideslider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showslider() {
    slider[currentslide].classList.add('on')
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

function prevSlider() {
    hideslider()
    if(currentslide == 0){
        currentslide = slider.length 
    } else {
        currentslide --
    }
    showslider()
}

btNext1.addEventListener('click', nextSlider)
btPrev1.addEventListener('click', prevSlider)

console.log(slider)