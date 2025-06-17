import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ShopDetail from "./pages/ShopDetail";
import ShopInfo from "./pages/ShopInfo";
import ShopFac from "./pages/ShopFac";
import ShopMenu from "./pages/ShopMenu";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import { HashRouter, Routes, Route } from "react-router-dom";
const OpenContext = React.createContext();
export { OpenContext };

export default function App() {
  const [open, toggleOpen] = React.useState(false);
  return (
    <HashRouter>
      <OpenContext.Provider value={{ toggleOpen }}>
        {open && <Slider />}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ShopDetail />}>
            <Route index element={<ShopInfo />} />
            <Route path="facilities" element={<ShopFac />} />
            <Route path="menu" element={<ShopMenu />} />
          </Route>
        </Routes>
      </OpenContext.Provider>
      <Footer />
    </HashRouter>
  );
}
