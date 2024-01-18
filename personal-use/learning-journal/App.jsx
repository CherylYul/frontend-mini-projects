import React from "react"
import  { HashRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./pages/About"
import Home from "./pages/Home"
import Main from "./pages/Main"
import MainBlog from "./pages/MainBlog"

export default function App() {
    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mainblog" element={<MainBlog />} />
            </Routes>
            <Footer />
        </HashRouter>
    )
}