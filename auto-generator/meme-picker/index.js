import { catsData } from "./data.js";

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const animatedGifs = document.getElementById('animated-gifs')
const memeModal = document.querySelector('.meme-modal')
const memeDisplay = document.getElementById('meme-display')
const closeBtn = document.getElementById('close-btn')

emotionRadios.addEventListener('change', highlightRadio)
closeBtn.addEventListener('click', closeModal)
getImageBtn.addEventListener('click', renderCat)

function highlightRadio (e) {
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios) {
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function closeModal() {
    memeModal.style.display = 'none'
}

function renderCat() {
    const catObject = getSingleObject()
    memeDisplay.innerHTML = `<img 
                            class="cat-img"
                            src="./images/${catObject.image}" 
                            alt="${catObject.alt}">`
    memeModal.style.display = 'flex'
}

function getSingleObject() {
    const catArray = getMatchingCatArray()
    if (catArray.length == 1) {
        return catArray[0]
    } else {
        const getNumber = Math.floor(Math.random() * catArray.length)
        return catArray[getNumber]
    }
}

function getMatchingCatArray() {
    if (document.querySelector('input[type="radio"]:checked')) {
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGif = animatedGifs.checked
        const matchingCatArray = catsData.filter(function(cat) {
            if (isGif) {
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            }
            else {
                return cat.emotionTags.includes(selectedEmotion)

            }
        })
        return matchingCatArray
    }
}

function generateEmotionArray() {
    const emotionArray = []
    for (let cat of catsData) {
        for (let emotion of cat.emotionTags) {
            if (!emotionArray.includes(emotion)) {
                emotionArray.push(emotion)
            }
        }
    }
    return emotionArray
}

function renderEmotionRadios() {
    let emotionArray = generateEmotionArray()
    let radioItems = ``
    for (let emotion of emotionArray) {
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input type="radio" id="${emotion}" value="${emotion}" name="emotion-choices">     
        </div>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionRadios()