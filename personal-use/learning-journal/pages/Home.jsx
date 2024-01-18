import React from "react"
import blogList from "../blogList"

export default function Home() {
    return (
        <div className="blog-container">
        {
            blogList.map(blog =>
                <div className="blog" key={blog}>
                    <img src={`../images/${blog.image}`} />
                    <p className="blog-date">{blog.date}</p>
                    <h2 className="blog-title">{blog.title}</h2>
                    <p className="blog-desc">{blog.desc}</p>
                </div> 
            )
        }
        </div>
    )
}