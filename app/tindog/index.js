import { dogs } from "./data.js";
import { Dog } from "./Dog.js";

let isWaiting = false;

function getNewDog() {
  const randomNumber = Math.floor(Math.random() * dogs.length);
  return new Dog(dogs[randomNumber]);
}

document.addEventListener("click", function (e) {
  if (!isWaiting) {
    isWaiting = true;
    if (e.target.id === "cross-btn" || e.target.dataset.cross === "false") {
      dogObj.setCorss();
      setTimeout(() => {
        dogObj = getNewDog();
        render();
        isWaiting = false;
      }, 3000);
    }
    if (e.target.id === "heart-btn" || e.target.dataset.heart === "false") {
      dogObj.setLike();
      setTimeout(() => {
        dogObj = getNewDog();
        render();
        isWaiting = false;
      }, 3000);
    }
  }
});

let dogObj = getNewDog();

function render() {
  document.querySelector("main").innerHTML = dogObj.getHtml();
  dogObj.setImage();
}

render();
