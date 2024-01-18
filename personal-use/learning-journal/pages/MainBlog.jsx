import React from "react"
import blogMain from "../blogMain"
import RecentPost from "../components/RecentPost"
import Example from "../components/Example"

export default function MainBlog() {
    return (
        <div>
            <div className="blog">
                <p className="blog-date indent">{blogMain.date}</p>
                <h2 className="blog-title indent">{blogMain.title}</h2>
                <p className="blog-desc indent">{blogMain.desc}</p>
                <img src={`../images/${blogMain.image}`} />
                <Example />
            </div>
            <p className="bold center">Recent posts</p>
            <RecentPost />
        </div>
    )
}