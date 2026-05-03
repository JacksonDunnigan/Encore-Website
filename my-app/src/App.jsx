import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Featured from "./pages/WindowSeries";
import Shop from "./pages/Shop";
import Footer from "./Footer";
import BobbingImage from "./BobbingImage";
import SplashScreen from "./SplashScreen";

import "./App.css";

// ── Inner component so we can use hooks that need to be inside BrowserRouter
function AppInner() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // ── Switch to shrunk state after 60px of scroll
      //    increase this number to delay the shrink
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className="navbar">
        <div className="navbar-background" />

        {/* ── Logo — top left, shrinks toward top-left */}
        <div className={`nav-brand ${scrolled ? 'nav-brand--scrolled' : ''}`}>
          <span className="nav-logo">Encore</span>
          <span className="nav-logo-sub">Poetry Project</span>
        </div>

        {/* ── Links — top right, shrinks toward top-right */}
        <div className={`nav-links ${scrolled ? 'nav-links--scrolled' : ''}`}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/featured">The Window Series</NavLink>
          <NavLink to="/shop">Shop</NavLink>
        </div>
      </nav>
      {/* </div> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>

      <Footer />
    </>
  )
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}