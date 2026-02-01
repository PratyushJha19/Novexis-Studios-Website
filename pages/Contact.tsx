import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-6xl font-heading font-black tracking-tighter mb-8 uppercase leading-tight">Start a System <span className="text-white/20">Upgrade.</span></h1>
          <p className="text-xl text-white/50 mb-12 leading-relaxed">
            Tell us about your project, your technical constraints, or your creative vision. 
            Our team typically responds within 12 hours with a preliminary analysis.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-blue-500 border border-white/5 group-hover:border-blue-500/50 transition-colors">
                <Mail />
              </div>
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">Email Us</p>
                <p className="text-xl font-bold text-white/90">novexisstudios@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-purple-500 border border-white/5 group-hover:border-purple-500/50 transition-colors">
                <MapPin />
              </div>
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">Studio Base</p>
                <p className="text-xl font-bold text-white/90">Digital First • Global Operation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/5 blur-[100px] -z-10 rounded-full"></div>
          
          <div className="glass p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 space-y-6"
              >
                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={48} />
                </div>
                <h2 className="text-3xl font-heading font-black uppercase tracking-tight">System Signal Received</h2>
                <p className="text-white/50 text-sm">One of our co-founders will review your message and get back to you shortly.</p>
                <button 
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-blue-400 hover:text-white transition-colors uppercase tracking-[0.2em]"
                >
                    Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 ml-2">Your Name</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 transition-colors text-sm" placeholder="Identification" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 ml-2">Email Address</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 transition-colors text-sm" placeholder="transmission@node.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 ml-2">System Category</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 transition-colors appearance-none text-sm">
                    <option className="bg-black">01 Technology & Development</option>
                    <option className="bg-black">02 Creative & Media</option>
                    <option className="bg-black">03 Design Systems</option>
                    <option className="bg-black">04 Cloud & Automations</option>
                    <option className="bg-black">05 Marketing & Analytics</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 ml-2">Project Brief</label>
                  <textarea required className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 transition-colors min-h-[150px] text-sm" placeholder="Describe the digital future you want to build..."></textarea>
                </div>

                <button 
                  disabled={loading}
                  className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold uppercase tracking-[0.2em] text-sm rounded-2xl transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {loading ? 'Transmitting...' : (
                    <>Send Transmission <Send size={16} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;