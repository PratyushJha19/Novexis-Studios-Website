import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  Plus,
  Trash2,
  Edit3,
  Save,
  X,
  Eye,
  EyeOff,
  ShieldCheck,
  Link as LinkIcon,
  Youtube,
} from "lucide-react";
import { getCurrentUser } from "../services/authService";
import {
  getCaseStudies,
  saveCaseStudy,
  deleteCaseStudy,
} from "../services/dataService";
import { CaseStudy, ProjectCategory } from "../types";

const AdminDashboard = () => {
  const user = getCurrentUser();
  const [studies, setStudies] = useState<CaseStudy[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const [formData, setFormData] = useState<Partial<CaseStudy>>({
    title: "",
    slug: "",
    category: ProjectCategory.TECH,
    description: "",
    problem: "",
    solution: "",
    outcome: "",
    technologies: [],
    imageUrl: "",
    videoUrl: "", // Added Video URL field
    published: false,
  });

  useEffect(() => {
    setStudies(getCaseStudies());
  }, []);

  if (!user || user.role !== "admin") return <Navigate to="/login" />;

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
      title: "",
      slug: "",
      category: ProjectCategory.TECH,
      description: "",
      problem: "",
      solution: "",
      outcome: "",
      technologies: [],
      imageUrl: "",
      videoUrl: "",
      published: false,
      createdAt: new Date().toISOString(),
    });
  };

  const handleSave = () => {
    if (formData.id && formData.title) {
      saveCaseStudy(formData as CaseStudy);
      setStudies(getCaseStudies());
      setEditingId(null);
      setIsAdding(false);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this system record? This cannot be undone.")) {
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
          <h1 className="text-4xl font-heading font-black tracking-tighter flex items-center gap-3 uppercase">
            <ShieldCheck className="text-blue-500" /> System Management
          </h1>
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30">
            Admin Access Granted • {user.email}
          </p>
        </div>
        {!editingId && !isAdding && (
          <button
            onClick={startAdd}
            className="flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all uppercase text-xs tracking-widest"
          >
            <Plus size={18} /> Initialize Record
          </button>
        )}
      </div>

      {editingId || isAdding ? (
        <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 space-y-10 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex justify-between items-center border-b border-white/5 pb-6">
            <h2 className="text-2xl font-heading font-black uppercase tracking-tight">
              {isAdding ? "New Deployment Record" : "Modifying Core Files"}
            </h2>
            <button
              onClick={() => {
                setEditingId(null);
                setIsAdding(false);
              }}
              className="p-2 glass rounded-full hover:text-red-500 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">
                Title
              </label>
              <input
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 text-sm"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Project Title"
              />
            </div>
            {/* ADDED SLUG FIELD HERE */}
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">
                URL Slug
              </label>
              <input
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 text-sm"
                value={formData.slug}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    slug: e.target.value.toLowerCase().replace(/ /g, "-"),
                  })
                }
                placeholder="project-name-slug"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">
                System Category
              </label>
              <select
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 text-sm uppercase font-bold tracking-wider appearance-none"
                value={formData.category}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    category: e.target.value as ProjectCategory,
                  })
                }
              >
                {Object.values(ProjectCategory).map((cat) => (
                  <option key={cat} value={cat} className="bg-black">
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            {/* Shifted Image/Video inputs below or keep side-by-side as per your preference */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2 flex items-center gap-2">
                <LinkIcon size={12} /> Poster Image URL
              </label>
              <input
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 text-sm"
                value={formData.imageUrl}
                onChange={(e) =>
                  setFormData({ ...formData, imageUrl: e.target.value })
                }
                placeholder="https://..."
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2 flex items-center gap-2">
                <Youtube size={12} /> Video URL (Optional)
              </label>
              <input
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 text-sm"
                value={formData.videoUrl}
                onChange={(e) =>
                  setFormData({ ...formData, videoUrl: e.target.value })
                }
                placeholder="YouTube Link"
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2">
              Short Description
            </label>
            <textarea
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 min-h-[100px] text-sm"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["problem", "solution", "outcome"].map((field) => (
              <div key={field} className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-2 capitalize">
                  {field}
                </label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500 min-h-[150px] text-xs leading-relaxed"
                  value={(formData as any)[field]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                />
              </div>
            ))}
          </div>

          <div className="flex gap-4 pt-6">
            <button
              onClick={handleSave}
              className="flex-1 flex items-center justify-center gap-2 px-8 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all uppercase text-xs tracking-[0.2em]"
            >
              <Save size={18} /> Commit to Ledger
            </button>
            <button
              onClick={() => {
                setEditingId(null);
                setIsAdding(false);
              }}
              className="px-8 py-5 glass text-white/40 font-bold rounded-2xl border border-white/10 hover:text-white uppercase text-xs tracking-widest"
            >
              Abort
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {studies.map((cs) => (
            <div
              key={cs.id}
              className="glass p-6 rounded-3xl border border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-blue-500/20 transition-all"
            >
              <div className="flex items-center gap-6">
                <img
                  src={cs.imageUrl}
                  className="w-16 h-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all"
                  alt=""
                />
                <div>
                  <h3 className="text-xl font-heading font-black uppercase tracking-tight">
                    {cs.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <p className="text-[10px] text-blue-500 uppercase tracking-[0.2em] font-black">
                      {cs.category}
                    </p>
                    {cs.videoUrl && (
                      <Youtube size={12} className="text-white/20" />
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => togglePublish(cs)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black tracking-widest transition-all ${
                    cs.published
                      ? "bg-green-500/10 text-green-500"
                      : "bg-white/5 text-white/20"
                  }`}
                >
                  {cs.published ? "LIVE" : "DRAFT"}
                </button>
                <button
                  onClick={() => startEdit(cs)}
                  className="p-3 glass rounded-xl text-white/40 hover:text-blue-500 transition-all"
                >
                  <Edit3 size={18} />
                </button>
                <button
                  onClick={() => handleDelete(cs.id)}
                  className="p-3 glass rounded-xl text-white/40 hover:text-red-500 transition-all"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
