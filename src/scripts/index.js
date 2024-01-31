const primarySlider = document.querySelectorAll('.primary-slider')
const primaryBtnPrev = document.getElementById('primary-prev-button')
const primaryBtnNext = document.getElementById('primary-next-button')

const secondarySlider = document.querySelectorAll('.secondary-slider')
const secondaryBtnPrev = document.getElementById('secondary-prev-button')
const secondaryBtnNext = document.getElementById('secondary-next-button')


let currentPrimarySlide = 0
let currentSecondarySlide = 0

function hideSlide(slider, currentSlide) {
    slider[currentSlide].classList.remove("on");
}

function showSlider(slider, currentSlide) {
    slider[currentSlide].classList.add('on');
}

function checkSlideLimit(e, slider, target) {
    const primaryBtnDisabled = document.querySelector(".primary.button-disable")
    if (target === 'primary-slide') {
        if (currentPrimarySlide === 0 || currentPrimarySlide === slider.length - 1) {
            e.target.classList.add("button-disable")
        }
        if (primaryBtnDisabled !== null) {
            primaryBtnDisabled.classList.remove("button-disable")
        }
    }
    
    const secondaryBtnDisabled = document.querySelector(".secondary.button-disable")
    if (target === 'secondary-slide') {
        if (currentSecondarySlide === 0 || currentSecondarySlide === slider.length - 1) {
            e.target.classList.add("button-disable")
        }
        if (secondaryBtnDisabled !== null) {
            secondaryBtnDisabled.classList.remove("button-disable")
        }
    }
}

function nextSlider(e) {
    const idButton = e.target.nextSibling.parentElement.id

    if (idButton === 'primary-next-button') {
        hideSlide(primarySlider, currentPrimarySlide)
        currentPrimarySlide++
        showSlider(primarySlider, currentPrimarySlide)
        checkSlideLimit(e, primarySlider, "primary-slide")

    } else if (idButton === 'secondary-next-button') {
        hideSlide(secondarySlider, currentSecondarySlide)
        currentSecondarySlide++
        showSlider(secondarySlider, currentSecondarySlide)
        checkSlideLimit(e, secondarySlider, "secondary-slide")
    }
}

function prevSlider(e) {
    const idButton = e.target.nextSibling.parentElement.id

    if (idButton === 'primary-prev-button') {
        hideSlide(primarySlider, currentPrimarySlide)
        currentPrimarySlide--
        showSlider(primarySlider, currentPrimarySlide)
        checkSlideLimit(e, primarySlider, "primary-slide")

    } else if (idButton === 'secondary-prev-button') {
        hideSlide(secondarySlider, currentSecondarySlide)
        currentSecondarySlide--
        showSlider(secondarySlider, currentSecondarySlide)
        checkSlideLimit(e, secondarySlider, "secondary-slide")
    }
}

primaryBtnNext.addEventListener('click', e => nextSlider(e))
primaryBtnPrev.addEventListener('click', e => prevSlider(e))

secondaryBtnNext.addEventListener('click', e => nextSlider(e))
secondaryBtnPrev.addEventListener('click', e => prevSlider(e))