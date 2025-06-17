export class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getHtml() {
    return `
        <div id="image-display">
            <div class="badge">
                <img src="./images/badge-like.png" id="like-badge">
                <img src="./images/badge-nope.png" id="nope-badge">
            </div>
            <h1>${this.name}<span> ${this.age}</span></h1>
            <p>${this.bio}</p>
            <div id="btn">
                <button id="cross-btn">
                    <img src="./images/icon-cross.png" 
                        data-cross="${this.hasBeenSwiped}">
                </button>
                <button id="heart-btn">
                    <img src="./images/icon-heart.png"
                        data-heart="${this.hasBeenLiked}">
                </button>
            </div>
        </div>
        `;
  }

  setImage() {
    document.getElementById("image-display").style.backgroundImage =
      `url(${this.avatar})`;
  }

  setLike() {
    this.hasBeenLiked = true;
    document.getElementById("heart-btn").style.backgroundColor = "#CCF1E6";
    document.getElementById("like-badge").style.display = "block";
    if (this.hasBeenSwiped) {
      this.unCross();
    }
  }

  unLike() {
    this.hasBeenLiked = false;
    document.getElementById("heart-btn").style.backgroundColor = "transparent";
    document.getElementById("like-badge").style.display = "none";
  }

  setCorss() {
    this.hasBeenSwiped = true;
    document.getElementById("cross-btn").style.backgroundColor = "#EDD9DF";
    document.getElementById("nope-badge").style.display = "block";
    if (this.hasBeenLiked) {
      this.unLike();
    }
  }

  unCross() {
    this.hasBeenSwiped = false;
    document.getElementById("cross-btn").style.backgroundColor = "transparent";
    document.getElementById("nope-badge").style.display = "none";
  }
}
