import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ShieldCheck, LogOut } from "lucide-react";
import { getCurrentUser, logout } from "../services/authService";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(getCurrentUser());
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(getCurrentUser());
  }, [location]);

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate("/");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col relative bg-transparent">
      <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* LOGO SECTION */}
          <Link to="/" className="flex items-center gap-4 group transition-all">
            <img
              src="/logo-transparent.png"
              alt="Novexis Logo"
              width={45}
              height={45}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black font-heading tracking-tighter bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NOVEXIS
              </span>
              <span className="text-[10px] font-bold text-white/30 tracking-[0.4em] mt-1 uppercase hidden sm:block">
                Studios
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV - Changed hidden md:flex to hidden lg:flex */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] font-bold uppercase tracking-[0.15em] transition-all hover:text-blue-500 ${
                  location.pathname === link.path
                    ? "text-white"
                    : "text-white/40"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {user?.role === "admin" ? (
              <div className="flex items-center gap-6 ml-4 pl-8 border-l border-white/10">
                <Link
                  to="/admin"
                  className="text-[12px] font-bold text-purple-400 flex items-center gap-2"
                >
                  <ShieldCheck size={14} /> Admin
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-white/20 hover:text-red-500 transition-colors"
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-[12px] font-bold text-white/40 hover:text-white tracking-[0.1em] uppercase px-5 py-2 border border-white/10 rounded-full transition-all hover:bg-white/5"
              >
                Portal
              </Link>
            )}
          </div>

          {/* TOGGLE - Changed md:hidden to lg:hidden to show on tablets */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* FULL SCREEN MENU (Mobile & Tablet) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center space-y-10"
          >
            <button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={40} />
            </button>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.path}
                  className="text-5xl md:text-7xl font-heading font-black text-white hover:text-blue-500 uppercase tracking-tighter transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-24 bg-transparent relative z-10">
        {children}
      </main>

      <footer className="bg-transparent border-t border-white/5 py-24 px-6 mt-20 relative z-10 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <h2 className="text-3xl font-black font-heading tracking-tighter uppercase leading-none">
              <img
                src="/logo-transparent.png"
                alt=""
                srcset=""
                width={50}
                height={50}
              />
              NOVEXIS <span className="text-white/20">Studios</span>
            </h2>
            <p className="text-white/40 max-w-sm text-lg leading-relaxed">
              Engineering high-fidelity digital infrastructure. We integrate
              cinema-grade production with robust, scalable software systems to
              define the future of digital interaction.
            </p>
          </div>
          <div>
            <h4 className="text-[18px] font-bold text-white/90 mb-8 uppercase tracking-tight">
              System Index
            </h4>
            <ul className="space-y-4 text-lg text-white/40 font-medium">
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Capabilities
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  Team Portal
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[18px] font-bold text-white/90 mb-8 uppercase tracking-tight">
              Transmission
            </h4>
            <ul className="space-y-4 text-lg text-white/40 font-medium">
              <li className="hover:text-white transition-colors cursor-pointer">
                novexisstudios@gmail.com
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                LinkedIn
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Instagram
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] font-medium uppercase tracking-[0.1em] text-white/20">
          <p>© 2024 Novexis Studios. All systems operational.</p>
          <div className="flex gap-10">
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy Protocol
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Terms of Engagement
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
