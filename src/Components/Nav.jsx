import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4, ease: "easeIn" }}
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 md:py-4 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white " : "bg-white"
      }`}
    >
      <div className="flex items-center gap-4 md:gap-8 lg:gap-10 w-full md:w-auto">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-bold whitespace-nowrap hover:text-[#c9003e] transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Port<span className="text-[#c9003e]">Folio</span>
        </Link>
      </div>

      {!location.pathname.includes("/contact") && (
        <div className="hidden md:block">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-block px-4 py-2 rounded-md text-sm md:text-base font-semibold cursor-pointer bg-[#c9003e] text-white hover:bg-[#a80035] transition-colors duration-300"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      )}

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          aria-label="Toggle menu"
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c9003e]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XIcon className="w-6 h-6 text-gray-800" />
          ) : (
            <MenuIcon className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-4 px-6 mobile-menu-container"
        >
          <div className="flex flex-col space-y-3">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pt-2"
            >
              <Link
                to="/contact"
                className="block w-full text-center px-4 py-3 rounded-md text-base font-semibold cursor-pointer bg-[#c9003e] text-white hover:bg-[#a80035] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

// Reusable NavLink component
const NavLink = ({ to, text, onClick }) => (
  <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
    <Link
      to={to}
      className="text-sm lg:text-base font-medium px-3 py-1.5 rounded hover:text-[#c9003e] hover:bg-[#f5f5f5] transition-all duration-300"
      onClick={onClick}
    >
      {text}
    </Link>
  </motion.div>
);

// Reusable MobileNavLink component
const MobileNavLink = ({ to, text, onClick }) => (
  <motion.div whileHover={{ x: 5 }} whileTap={{ x: 0 }}>
    <Link
      to={to}
      className="text-lg font-medium px-3 py-3 rounded hover:text-[#c9003e] hover:bg-[#f5f5f5] transition-all duration-300 block"
      onClick={onClick}
    >
      {text}
    </Link>
  </motion.div>
);

// Icons
const MenuIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const XIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default Nav;
