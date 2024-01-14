import { menuArray  } from "./data.js";

const order = document.getElementById('order')
const payment = document.getElementById("payment")
const paymentDetails = document.getElementById('payment-details')
const orderProcessing = document.getElementById("order-processing")
const cardDetails = document.getElementById("card-details")

document.addEventListener('click', function(e) {
    if (e.target.dataset.num) {
        const targetObj = menuArray.filter(function(item){
            return item.id == e.target.dataset.num
        })[0]
        targetObj.quantity++
        renderPayment()
    }
    if (e.target.dataset.remove) {
        removeObj(e.target.dataset.remove)
    }

    if (e.target.id == "order-btn") {
        cardDetails.style.display = 'block'
    }

    if (e.target.id == "pay-btn") {
        let customerName = document.getElementById("customer-name").value
        payment.style.display = 'none'
        cardDetails.style.display = 'none'
        orderProcessing.innerText = `Thanks, ${customerName}! Your order is on its way!`
        orderProcessing.style.display = 'flex'
    }
})

function removeObj(id) {
    const targetObj = menuArray.filter(function(item){
        return item.id == id
    })[0]
    targetObj.quantity = 0
    let count = 0
    for (let item of menuArray) {
        if (item.quantity == 0) {
            count++;
            if (count == menuArray.length) {
                payment.style.display = 'none'
                break
            }
        } else {
            renderPayment()
            break
        }
    }
}

function renderPayment() {
    payment.style.display = 'flex'
    let paymentHTML = ``
    let sum = 0
    menuArray.forEach(function(item){
        if (item.quantity > 0) {
            let total = Math.floor((item.quantity * item.price) * 100) / 100
            sum += total
            paymentHTML += `
            <div class="payment-item">
                <div>
                    <span>${item.name}</span>
                    <button class="remove-btn" data-remove="${item.id}">remove</button>
                    <span>x ${item.quantity}</span>
                </div>
                <div>$${total}</div>
            </div>
            `
        }
    })
    paymentHTML += `
    <div class="total-price">
        <div>Total price:</div>
        <div>$${Math.floor(sum * 100) / 100}</div>
    </div>
    `
    paymentDetails.innerHTML = paymentHTML
}

function renderOrder() {
    let orderHTML = ''
    menuArray.forEach(function(item){
        orderHTML += `
        <div class="order-item">
            <div class="info">
                <img src="images/${item.image}" alt="${item.name}" class="item-image">
                <div class="details">
                    <h3>${item.name}</h3>
                    <p>${item.ingredients}</p>
                    <h4>$${item.price}</h4>
                </div>
            </div>
            <button class="increment-btn" data-num="${item.id}">+</button>
        </div>
        `
    })
    order.innerHTML = orderHTML
}

renderOrder()