import React from "react"
import { Link } from "react-router-dom"
import RecentPost from "../components/RecentPost"
import blogMain from "../blogMain"

export default function Main() {
    return (
        <div>
            <Link className="main-blog" to="/mainblog" >
                <p className="blog-date">{blogMain.date}</p>
                <h1 className="blog-title">{blogMain.title}</h1>
                <p className="blog-desc">{blogMain.desc}</p>
            </Link>
            <RecentPost />
            <Link className="view-more bold" to="/home">View More</Link>
        </div>
    )
}