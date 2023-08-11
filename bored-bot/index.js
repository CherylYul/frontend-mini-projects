document.getElementById("generate-activity").addEventListener("click", render)

function render() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            document.querySelector(".activity-container").innerHTML = `
                <p>${data.activity}</p>
                <p>Type: ${data.type}</p>
                <p>Price: ${data.price} USD</p>
            `
        })
}