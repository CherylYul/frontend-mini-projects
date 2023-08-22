// import React from "react"
// import ReactDOM from "react-dom"
// import App from "./App"
// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import Card from "./components/Card"
// import data from "./data"

const data = [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call Positively Impactful Moments of Disappointment. Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: "katie-zaferes.png",
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: "wedding-photography.png",
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: "mountain-bike.png",
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
    }
]

ReactDOM.render(<App />, document.getElementById("root"))

function App() {
    const cards = data.map(item => {
        return <Card key={item.id} {...item} />
    })        
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">{cards}</section>   
        </div>
    )
}

function Navbar() {
    return (
        <nav>
            <img src="./images/airbnb-logo.png" className="nav--logo" />
        </nav>
    )
}

function Hero() {
    return (
        <section className="hero">
            <img src="./images/photo-grid.png" className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

function Card(props) {
    let badgeText = props.openSpots === 0 ? "SOLD OUT" :
                    props.location === "Online" ? "ONLINE" : ""
    
    return (
        <div className="card">
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            <img 
                src={`./images/${props.coverImg}`} 
                className="card--image" 
            />
            <div className="card--stats">
                <i className="fa-solid fa-star card--star"></i>
                <span> {props.stats.rating}</span>
                <span className="gray"> ({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    )
}