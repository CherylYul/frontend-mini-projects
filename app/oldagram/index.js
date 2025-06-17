const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: "21,519",
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: "692",
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: "15,289",
  },
];

const user = document.getElementById("user");
const post = document.getElementById("post");
const react = document.getElementById("react");

function renderContent() {
  content = posts[Math.floor(Math.random() * 3)];
  user.innerHTML = `
        <img class="ava" src="${content.avatar}">
        <div>
            <p class="name">${content.name}</p>
            <p class="location">${content.location}</p>
        </div>
    `;
  post.innerHTML = `<img src="${content.post}">`;
  react.innerHTML = `
        <img class="heart" src="images/icon-heart.png" alt="heart-icon">
        <img class="comment" src="images/icon-comment.png" alt="comment-icon">
        <img class="dm" src="images/icon-dm.png" alt="dm-icon"/>            
        <p class="likes"><span>${content.likes}</span> likes</p>
        <p><span>${content.username}</span> ${content.comment}</p>
    `;
}

renderContent();
const likes = document.querySelector(".likes span");

post.addEventListener("dblclick", function () {
  increaseNumber = ~~likes.innerText.replace(",", "") + 1;
  if (increaseNumber >= 1000) {
    intNumber = Math.floor(increaseNumber / 1000);
    decNumber = increaseNumber % 1000;
    increaseNumber = intNumber + "," + decNumber;
  }
  likes.innerText = increaseNumber;
});
