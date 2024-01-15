import React from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ShopDetail from "./pages/ShopDetail"
import { HashRouter, Routes, Route } from "react-router-dom"

export default function App() {
    return (
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<ShopDetail />} />
            </Routes>
        </HashRouter>
    )
}