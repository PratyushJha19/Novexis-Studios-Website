
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, Key, Info } from 'lucide-react';
import { login } from '../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = login(email, password);
    if (user) {
      navigate('/admin');
    } else {
      setError('Invalid system credentials.');
    }
  };

  return (
    <div className="max-w-md mx-auto px-6 py-40">
      <div className="glass p-10 rounded-[2.5rem] border border-white/10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
        <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <Key />
        </div>
        <h1 className="text-3xl font-display font-bold mb-2">Access Portal</h1>
        <p className="text-white/40 mb-8 text-sm uppercase tracking-widest font-display font-bold">Secure Admin Entry</p>

        <div className="bg-blue-500/5 border border-blue-500/20 p-4 rounded-xl mb-6 text-[11px] text-blue-400 text-left flex gap-3">
          <Info size={24} className="shrink-0" />
          <div>
            <p className="font-bold uppercase mb-1">Portal Access Credentials:</p>
            <p>Email: <span className="text-white font-mono">admin@novexis.com</span></p>
            <p>Pass: <span className="text-white font-mono">password123</span></p>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-xl mb-6 text-sm flex items-center gap-2">
            <ShieldAlert size={16} /> {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="email" 
            placeholder="Admin Email" 
            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-blue-500 transition-colors font-display text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="System Passcode" 
            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-blue-500 transition-colors font-display text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full py-4 bg-white text-black font-display font-bold rounded-xl hover:bg-blue-500 hover:text-white transition-all mt-4 uppercase tracking-widest text-xs">
            Initialize Session
          </button>
        </form>
        
        <p className="mt-10 text-[9px] text-white/20 uppercase tracking-[0.3em] font-display font-bold italic">Encrypted Connection Established</p>
      </div>
    </div>
  );
};

export default Login;
