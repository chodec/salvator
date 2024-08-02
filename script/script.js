const header_photo = document.getElementById("header_photo")
const background_photo = document.getElementsByClassName("bg-cover")[0]
const header_color_green = document.getElementById("header_color_green")
const header_color_gray = document.getElementById("header_color_gray")

header_color_green.addEventListener("mouseover", () => {
    header_photo.src="/assets/photos/header_green.jpeg"
})

header_color_gray.addEventListener("mouseover", () => {
    header_photo.src="/assets/photos/header_gray.jpeg"
})

const applyAnimation = (element) => {
    element.classList.add('tilt-n-move-shaking')
    setTimeout(() => {
        element.classList.remove('tilt-n-move-shaking')
    }, 1500)
}

function startAnimations() {
    applyAnimation(header_color_green)
    setTimeout(() => {
        applyAnimation(header_color_gray)
    }, 3500)
}

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider')
    let scrollAmount = 0

    function slide() {
        scrollAmount -= 1
        if (scrollAmount <= -slider.scrollWidth / 2) {
            scrollAmount = 0
        }
        slider.style.transform = `translateX(${scrollAmount}px)`
        requestAnimationFrame(slide)
    }

    slide()
})


startAnimations()
setInterval(startAnimations, 7000)