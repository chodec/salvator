header_photo = document.getElementById("header_photo")
header_color_green = document.getElementById("header_color_green")
header_color_gray = document.getElementById("header_color_gray")

header_color_green.addEventListener("mouseover", () => {
    header_photo.src="/assets/photos/header_green.JPG"
})

header_color_gray.addEventListener("mouseover", () => {
    header_photo.src="/assets/photos/header_gray.JPG"
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
    }, 5000)
}

startAnimations()
setInterval(startAnimations, 10000)