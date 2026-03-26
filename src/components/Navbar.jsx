import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!document.title.includes("|")) { 
        document.title = "PrepWise | Your AI-Powered Interview Coach";
    }
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && !metaDesc.getAttribute("content")) {
        metaDesc.setAttribute("content", "Navigate through PrepWise to access AI-driven interview prep, coding labs, and behavioral session roadmaps.");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Start Preparing Now", path: "/dashboard", cta: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50 py-3 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-black tracking-tighter flex items-center"
        >
          <span className="text-indigo-600">Prep</span>
          <span className={scrolled ? "text-gray-900" : "text-gray-800"}>Wise</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                relative text-sm font-medium transition-all duration-300
                ${link.cta 
                  ? "bg-indigo-600 text-white px-5 py-2.5 rounded-full hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200" 
                  : isActive 
                    ? "text-indigo-600" 
                    : "text-gray-600 hover:text-indigo-600"}
              `}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && !link.cta && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-xl bg-gray-100/80 text-2xl text-gray-700 hover:bg-gray-200 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => `
                      block w-full text-lg font-semibold p-3 rounded-lg transition-colors
                      ${link.cta 
                        ? "bg-indigo-600 text-white text-center mt-2" 
                        : isActive ? "text-indigo-600 bg-indigo-50" : "text-gray-800 hover:bg-gray-50"}
                    `}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

