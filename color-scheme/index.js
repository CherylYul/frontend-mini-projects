import tinycolor from "https://esm.sh/tinycolor2";

const colorForm = document.getElementById("header")
const colorContainers = document.getElementsByClassName("color")

colorForm.addEventListener("submit", function(e) {
    e.preventDefault()
    // location.reload(true); 
    const colorSeed = document.querySelector("form input").value
    const colorMode = document.querySelector("form select").value
    getColorData(colorSeed.substr(1), colorMode)
})

async function getColorData(seed, mode) {
    const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${seed}&mode=${mode}`)
    const data = await res.json()
    for (let i = 0; i < colorContainers.length; i++) {
        colorContainers[i].style.backgroundColor = data.colors[i].hex.value
        colorContainers[i].innerHTML = `<p class="text">${data.colors[i].hex.value}</p>`
        var c = tinycolor(data.colors[i].hex.value)
        if (c.isLight()) { 
            colorContainers[i].style.color = "#1F2937"
        } else {
            colorContainers[i].style.color = "#D1D5DB"
        }
    }
}

const colorHex1 = document.querySelector(".color.one");
const colorHex2 = document.querySelector(".color.two");
const colorHex3 = document.querySelector(".color.three");
const colorHex4 = document.querySelector(".color.four");
const colorHex5 = document.querySelector(".color.five");

function copyHex(copyEl) {
    copyEl.addEventListener("click", () => document.execCommand("copy"))
    copyEl.addEventListener("copy", event => {
        event.preventDefault();
        if (event.clipboardData) {
          event.clipboardData.setData("text/plain", copyEl.textContent);
        }
    })
}

copyHex(colorHex1)
copyHex(colorHex2)
copyHex(colorHex3)
copyHex(colorHex4)
copyHex(colorHex5)

// function getColorData(seed, mode) {
//     fetch(`https://www.thecolorapi.com/scheme?hex=${seed}&mode=${mode}`)
//         .then(res => res.json())
//         .then(data => { return data })
// JSON.stringify(data.colors[i].hex.value)
// }