import React from "react"
import blogList from "../blogList"

export default function RecentPost() {
    return (
        <div className="blog-container">
        {
            blogList.slice(0, 3).map(blog =>
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