const $html = document.querySelector('html')
const moon = document.querySelector('#moon')
const sun = document.querySelector('#sun')

moon.addEventListener("click", () => {
    $html.classList.add('dark-mode')
    moon.style.display = 'none'
    sun.style.display = 'block'
    sun.style.color = '#fff'
})
sun.addEventListener("click", () => {
    $html.classList.remove('dark-mode')
    moon.style.display = 'block'
    sun.style.display = 'none'
})
