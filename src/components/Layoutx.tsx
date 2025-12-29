import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const Layoutx = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
<Navbar
  isMenuOpen={isMenuOpen}
  setIsMenuOpen={setIsMenuOpen}
/>
      <main className={`flex-1 ${isMenuOpen ? "py-16" : ""}`}>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layoutx;
