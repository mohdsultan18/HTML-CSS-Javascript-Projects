const slides = document.querySelectorAll(".slide")
var counter = 0;
//console.log(slides)
slides.forEach(
    (slide, index) => {
        slide.style.top = `${index * 100}%`
    }
)

const goPrev = () => {
    counter--
    slideImage()
}

const goNext = () => {
    counter++ 
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            if (counter === slides.length) {
                counter = 0;
            }
            slide.style.transform = `translateY(-${counter * 100}%)`
            console.log(slide.style.transform)
        }

    )
}