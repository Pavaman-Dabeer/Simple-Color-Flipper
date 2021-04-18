const btn = document.getElementById("btn")
const color = document.getElementById("color")
const target = document.getElementById("target-area")
const reset = document.getElementById("clr")

const numbers = "0123456789";
const alphabets = "abcdef";

function getRandomNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getRandomAlphabet() {
    return alphabets[Math.floor(Math.random() * alphabets.length)]
}

function getRandomHexCode() {
    let arr = [];
    arr.push(getRandomNumber())
    arr.push(getRandomAlphabet())
    return arr[Math.floor(Math.random() * arr.length)]
}

function generateColor() {
    let hex = "#"
    for (let index = 0; index < 6; index++) {
        hex += getRandomHexCode()
    }

    target.style.backgroundColor = hex
    color.textContent = hex
    color.style.color = hex

}

function resetColor() {
    color.textContent = "#FFFFFF";
    color.style.color = "#FFF"
    target.style.backgroundColor = "#FFFFFF"
}

btn.addEventListener("click", generateColor)
reset.addEventListener('click', resetColor)

