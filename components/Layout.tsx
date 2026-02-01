
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShieldCheck, LogOut } from 'lucide-react';
import { getCurrentUser, logout } from '../services/authService';

interface LayoutProps {
  // Fixed: Made children optional to ensure proper resolution even during global namespace conflicts
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
    navigate('/');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative bg-transparent">
      <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-black font-heading tracking-tighter flex items-center gap-2">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">NOVEXIS</span>
            <span className="text-[10px] font-bold text-white/30 tracking-[0.4em] mt-1 uppercase">Studios</span>
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[14px] font-medium uppercase tracking-[0.1em] transition-all hover:text-blue-500 ${
                  location.pathname === link.path ? 'text-white' : 'text-white/40'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {user?.role === 'admin' ? (
              <div className="flex items-center gap-6 ml-4 pl-8 border-l border-white/10">
                <Link to="/admin" className="text-[12px] font-bold text-purple-400 hover:text-white uppercase tracking-[0.1em] flex items-center gap-2">
                  <ShieldCheck size={14} /> Admin
                </Link>
                <button onClick={handleLogout} className="text-white/20 hover:text-red-500 transition-colors">
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
                <Link to="/login" className="text-[13px] font-medium text-white/40 hover:text-white/80 tracking-[0.1em] uppercase px-6 py-2 border border-white/10 rounded-full transition-all hover:bg-white/5">Portal</Link>
            )}
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/98 flex flex-col items-center justify-center space-y-12 animate-in fade-in zoom-in duration-300">
          <button className="absolute top-8 right-8 text-white" onClick={() => setIsMenuOpen(false)}>
            <X size={36} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-4xl font-heading font-black text-white hover:text-blue-500 uppercase tracking-tighter"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      <main className="flex-grow pt-24 bg-transparent relative z-10">
        {children}
      </main>

      <footer className="bg-transparent border-t border-white/5 py-24 px-6 mt-20 relative z-10 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <h2 className="text-3xl font-black font-heading tracking-tighter uppercase leading-none">NOVEXIS <span className="text-white/20">Studios</span></h2>
            <p className="text-white/40 max-w-sm text-lg leading-relaxed">
              Engineering high-fidelity digital infrastructure. We integrate cinema-grade production with robust, scalable software systems to define the future of digital interaction.
            </p>
          </div>
          <div>
            <h4 className="text-[18px] font-bold text-white/90 mb-8 uppercase tracking-tight">System Index</h4>
            <ul className="space-y-4 text-lg text-white/40 font-medium">
              <li><Link to="/services" className="hover:text-white transition-colors">Capabilities</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Team Portal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[18px] font-bold text-white/90 mb-8 uppercase tracking-tight">Transmission</h4>
            <ul className="space-y-4 text-lg text-white/40 font-medium">
              <li className="hover:text-white transition-colors cursor-pointer">novexisstudios@gmail.com</li>
              <li className="hover:text-white transition-colors cursor-pointer">LinkedIn</li>
              <li className="hover:text-white transition-colors cursor-pointer">Instagram</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] font-medium uppercase tracking-[0.1em] text-white/20">
          <p>© 2024 Novexis Studios. All systems operational.</p>
          <div className="flex gap-10">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Protocol</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Engagement</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
