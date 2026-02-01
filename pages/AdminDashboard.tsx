
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Plus, Trash2, Edit3, Save, X, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { getCurrentUser } from '../services/authService';
import { getCaseStudies, saveCaseStudy, deleteCaseStudy } from '../services/dataService';
import { CaseStudy, ProjectCategory } from '../types';

// Fixed: Removed React.FC requirement to prevent mandatory children errors during rendering
const AdminDashboard = () => {
  const user = getCurrentUser();
  const [studies, setStudies] = useState<CaseStudy[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  // Form State
  const [formData, setFormData] = useState<Partial<CaseStudy>>({
    title: '',
    slug: '',
    category: ProjectCategory.TECH,
    description: '',
    problem: '',
    solution: '',
    outcome: '',
    technologies: [],
    imageUrl: '',
    published: false
  });

  useEffect(() => {
    setStudies(getCaseStudies());
  }, []);

  if (!user || user.role !== 'admin') return <Navigate to="/login" />;

  const startEdit = (cs: CaseStudy) => {
    setEditingId(cs.id);
    setFormData(cs);
    setIsAdding(false);
  };

  const startAdd = () => {
    setIsAdding(true);
    setEditingId(null);
    setFormData({
      id: Math.random().toString(36).substr(2, 9),
      title: 'New Case Study',
      slug: 'new-study',
      category: ProjectCategory.TECH,
      description: '',
      problem: '',
      solution: '',
      outcome: '',
      technologies: [],
      imageUrl: 'https://picsum.photos/seed/new/1200/800',
      published: false,
      createdAt: new Date().toISOString()
    });
  };

  const handleSave = () => {
    if (formData.id) {
      saveCaseStudy(formData as CaseStudy);
      setStudies(getCaseStudies());
      setEditingId(null);
      setIsAdding(false);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this system record? This cannot be undone.')) {
      deleteCaseStudy(id);
      setStudies(getCaseStudies());
    }
  };

  const togglePublish = (cs: CaseStudy) => {
    const updated = { ...cs, published: !cs.published };
    saveCaseStudy(updated);
    setStudies(getCaseStudies());
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold flex items-center gap-3">
             <ShieldCheck className="text-purple-500" /> System Management
          </h1>
          <p className="text-white/40">Role: {user.role.toUpperCase()} • {user.email}</p>
        </div>
        {!editingId && !isAdding && (
          <button onClick={startAdd} className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors">
            <Plus size={20} /> Create Case Study
          </button>
        )}
      </div>

      {(editingId || isAdding) ? (
        <div className="glass p-10 rounded-3xl border border-white/10 space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{isAdding ? 'Initialize Record' : 'Modifying Records'}</h2>
            <button onClick={() => { setEditingId(null); setIsAdding(false); }} className="text-white/40 hover:text-white"><X /></button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="block text-xs font-bold uppercase tracking-widest text-white/40">Title</label>
              <input 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-blue-500"
                value={formData.title} 
                onChange={e => setFormData({...formData, title: e.target.value})}
              />
            </div>
            <div className="space-y-4">
              <label className="block text-xs font-bold uppercase tracking-widest text-white/40">Slug</label>
              <input 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-blue-500"
                value={formData.slug} 
                onChange={e => setFormData({...formData, slug: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-xs font-bold uppercase tracking-widest text-white/40">Short Description</label>
            <textarea 
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-blue-500 min-h-[100px]"
              value={formData.description} 
              onChange={e => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <label className="block text-xs font-bold uppercase tracking-widest text-white/40">Problem</label>
              <textarea className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-blue-500 min-h-[150px]" value={formData.problem} onChange={e => setFormData({...formData, problem: e.target.value})} />
            </div>
            <div className="space-y-4">
              <label className="block text-xs font-bold uppercase tracking-widest text-white/40">System/Solution</label>
              <textarea className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-blue-500 min-h-[150px]" value={formData.solution} onChange={e => setFormData({...formData, solution: e.target.value})} />
            </div>
            <div className="space-y-4">
              <label className="block text-xs font-bold uppercase tracking-widest text-white/40">Outcome</label>
              <textarea className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-blue-500 min-h-[150px]" value={formData.outcome} onChange={e => setFormData({...formData, outcome: e.target.value})} />
            </div>
          </div>

          <div className="flex gap-4">
            <button onClick={handleSave} className="flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-500 transition-colors">
              <Save size={20} /> Commit Changes
            </button>
            <button onClick={() => { setEditingId(null); setIsAdding(false); }} className="px-8 py-4 glass text-white font-bold rounded-xl border border-white/10">
              Abort Operation
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {studies.map(cs => (
            <div key={cs.id} className="glass p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <img src={cs.imageUrl} className="w-20 h-20 rounded-xl object-cover" alt="" />
                <div>
                  <h3 className="text-xl font-bold">{cs.title}</h3>
                  <p className="text-xs text-white/30 uppercase tracking-widest font-bold">{cs.category}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => togglePublish(cs)} 
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                    cs.published ? 'bg-green-500/10 text-green-500' : 'bg-white/5 text-white/40'
                  }`}
                >
                  {cs.published ? <Eye size={14} /> : <EyeOff size={14} />}
                  {cs.published ? 'PUBLISHED' : 'DRAFT'}
                </button>
                <button onClick={() => startEdit(cs)} className="p-2 text-white/40 hover:text-blue-400 transition-colors"><Edit3 size={20} /></button>
                <button onClick={() => handleDelete(cs.id)} className="p-2 text-white/40 hover:text-red-500 transition-colors"><Trash2 size={20} /></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
