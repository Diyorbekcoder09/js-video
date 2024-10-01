const row1 = document.querySelector(".row1")
const row2 = document.querySelector(".row2")
const btn = document.querySelector(".btn")
const row3 = document.querySelector(".row3")
const img = document.querySelector(".img")

btn.addEventListener("click", (e) => {
    e.preventDefault();

    img.style.width = row1.value + "px"
    img.style.height = row2.value + "px"
    img.style.opacity = row3.value + "%"

})
