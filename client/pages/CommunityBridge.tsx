import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  AlertTriangle, 
  ArrowRight, 
  Heart, 
  ShieldCheck, 
  Zap, 
  Users, 
  Info,
  Droplets,
  Briefcase,
  Star,
  Sun,
  Smile,
  HandHeart,
  Globe,
  Navigation
} from "lucide-react";

export default function CommunityBridge() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-emerald-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
              2R
            </div>
            <span className="font-black text-xl tracking-tight text-slate-900">Two Rivers</span>
          </Link>
          <Link to="/donate" className="relative overflow-hidden bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition font-bold shadow-xl shadow-emerald-600/20 group">
            <span className="relative z-10">Support the Mission</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" />
          </Link>
        </nav>
      </header>

      {/* Hero: Welcoming & Bright */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-emerald-100/50 rounded-full blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -60, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] bg-blue-100/40 rounded-full blur-[100px]" 
          />
          <div className="absolute top-[20%] right-[15%] w-24 h-24 bg-amber-100/30 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white border border-emerald-100 px-5 py-2 rounded-full mb-10 shadow-sm"
          >
            <Sun className="w-4 h-4 text-amber-500 animate-spin-slow" />
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-[0.2em]">Building Tomorrow Together</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter"
          >
            A Bridge Built on <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 italic">Community Love.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-500 text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
          >
            The Prop R vote was a moment of confusion, but our mission remains clear. We are inviting Hannibal to join us in securing the future for our incredible workforce.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link to="/donate" className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-slate-900/20 uppercase tracking-tighter group">
              Bridge the Gap <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#truth" className="bg-white border-2 border-slate-100 text-slate-600 px-12 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
              Read the Story <Info className="w-5 h-5 text-emerald-500" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Community Pillars: Welcoming Icons */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { icon: HandHeart, title: "Dignity", desc: "Honoring the unique abilities of every individual.", color: "text-rose-500", bg: "bg-rose-50" },
              { icon: Globe, title: "Purpose", desc: "Creating a sense of belonging through work.", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: Users, title: "Family", desc: "A supportive network that never gives up.", color: "text-amber-500", bg: "bg-amber-50" },
              { icon: Navigation, title: "Future", desc: "Navigating challenges with optimism.", color: "text-emerald-500", bg: "bg-emerald-50" }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 ${pillar.bg} rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform shadow-sm`}>
                  <pillar.icon className={`w-10 h-10 ${pillar.color}`} />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tighter">{pillar.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Truth Section: Refined Depth */}
      <section id="truth" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="inline-flex items-center gap-3 text-emerald-600 font-black text-sm uppercase tracking-widest">
                <span className="w-8 h-px bg-emerald-600" /> The Clarity Report
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Clearing the <br/>
                <span className="text-emerald-600">Water Bill Confusion.</span>
              </h2>
              <div className="space-y-8 text-slate-600 text-xl leading-relaxed font-medium">
                <p>
                  Prop R failed because many residents didn't know that the small utility fee was the <span className="text-slate-900 font-bold">primary fuel</span> for Two Rivers Industries.
                </p>
                <p className="bg-emerald-50 p-8 rounded-3xl border-l-8 border-emerald-500 italic text-emerald-900 text-lg">
                  "It wasn't a rejection of our workers—it was a rejection of an unexplained cost. We're here to explain it now."
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                    <Droplets className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg mb-1 uppercase tracking-tighter">The Drop</h4>
                    <p className="text-sm text-slate-500 font-medium">The utility fee was just a few dollars, but together, it changed lives.</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                    <Star className="w-7 h-7 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg mb-1 uppercase tracking-tighter">The Spark</h4>
                    <p className="text-sm text-slate-500 font-medium">Now, we rely on individual sparks of generosity to keep the lights on.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative depth elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60" />
              
              <div className="relative bg-white border border-slate-100 p-10 sm:p-14 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.04)] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-teal-400" />
                <h3 className="text-2xl font-black text-slate-900 mb-10 flex items-center gap-4 uppercase tracking-tighter">
                  <span className="p-3 bg-slate-50 rounded-xl"><Zap className="text-emerald-500 w-6 h-6" /></span> The Gap Analysis
                </h3>
                
                <div className="space-y-12">
                  <div className="relative pt-6">
                    <div className="flex justify-between text-xs font-black text-slate-400 mb-4 uppercase tracking-[0.2em]">
                      <span>Community Funding</span>
                      <span className="text-rose-500">Critical Shortfall</span>
                    </div>
                    <div className="w-full h-5 bg-slate-100 rounded-full overflow-hidden p-1 shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "65%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-rose-400 to-rose-600 rounded-full" 
                      />
                    </div>
                    <div className="flex justify-between mt-3">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Goal: Sustainability</span>
                      <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">65% Progress</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[
                      { icon: AlertTriangle, color: "text-rose-500", bg: "bg-rose-50", label: "Financial Gap", value: "$150,000 / Year" },
                      { icon: Smile, color: "text-amber-500", bg: "bg-amber-50", label: "Impacted Lives", value: "40+ Employees" },
                      { icon: HandHeart, color: "text-emerald-500", bg: "bg-emerald-50", label: "Our Mission", value: "100% Stability" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                        <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center shrink-0`}>
                          <item.icon className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <div>
                          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{item.label}</div>
                          <div className="text-slate-900 font-bold">{item.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link to="/donate" className="block w-full bg-emerald-600 text-white text-center py-5 rounded-2xl font-black hover:bg-emerald-700 transition shadow-xl shadow-emerald-600/20 uppercase tracking-tighter group">
                    Close the Gap <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Voices Section: Human Connection */}
      <section className="py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight uppercase">Voices of Two Rivers</h2>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                name: "Maria S.", 
                role: "Workshop Employee", 
                quote: "This place is my home. Having a job means I can contribute to my city and see my friends every day.",
                color: "border-blue-200"
              },
              { 
                name: "John D.", 
                role: "Parent Advocate", 
                quote: "Two Rivers gave my son a purpose I didn't think was possible. We can't let this mission fade.",
                color: "border-emerald-200"
              },
              { 
                name: "Sarah L.", 
                role: "Community Partner", 
                quote: "The recycling services they provide are vital. Losing them would be a step back for all of Hannibal.",
                color: "border-amber-200"
              }
            ].map((voice, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className={`bg-white border-b-8 ${voice.color} p-10 rounded-[2.5rem] shadow-sm relative`}
              >
                <div className="absolute top-0 right-10 -translate-y-1/2 w-12 h-12 bg-white border border-slate-100 rounded-full flex items-center justify-center text-emerald-500 shadow-md">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 italic font-medium">"{voice.quote}"</p>
                <div>
                  <div className="text-slate-900 font-black uppercase tracking-tighter">{voice.name}</div>
                  <div className="text-emerald-500 text-xs font-bold uppercase tracking-widest">{voice.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call: Vibrant & Hopeful */}
      <section className="py-32 relative overflow-hidden bg-slate-900">
        {/* Decorative Light Leaks */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="w-24 h-24 bg-emerald-500/20 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-emerald-500/30 backdrop-blur-md"
          >
            <HandHeart className="w-12 h-12 text-emerald-400" />
          </motion.div>
          
          <h2 className="text-5xl sm:text-7xl font-black text-white mb-10 leading-[1] tracking-tighter uppercase">
            Let's Show them <br/>
            <span className="text-emerald-400 italic">Hannibal Cares.</span>
          </h2>
          
          <p className="text-slate-400 text-xl mb-14 leading-relaxed font-medium">
            Confused ballots don't define us. Our actions do. Join the movement to bridge the gap and keep Two Rivers Industries thriving for decades to come.
          </p>
          
          <Link to="/donate" className="inline-flex items-center gap-4 bg-emerald-500 text-white px-16 py-6 rounded-[2rem] font-black text-2xl hover:scale-110 hover:bg-emerald-400 transition-all shadow-[0_20px_50px_rgba(16,185,129,0.3)] group">
            DONATE NOW <Heart className="w-8 h-8 group-hover:scale-125 transition-transform" />
          </Link>
          
          <div className="mt-16 flex items-center justify-center gap-10 opacity-40">
            <div className="h-px bg-white/20 grow max-w-[100px]" />
            <div className="text-[10px] font-black text-white uppercase tracking-[0.5em]">Be A Team Player</div>
            <div className="h-px bg-white/20 grow max-w-[100px]" />
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <footer className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black text-xs">2R</div>
            <span className="text-slate-900 font-black uppercase tracking-tighter">Two Rivers Industries</span>
          </div>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.3em] mb-12">
            Hannibal's Heart. Missouri's Pride.
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            <Link to="/" className="text-slate-600 font-black text-xs uppercase tracking-widest hover:text-emerald-600 transition">Home</Link>
            <Link to="/employment" className="text-slate-600 font-black text-xs uppercase tracking-widest hover:text-emerald-600 transition">Employment</Link>
            <Link to="/donate" className="text-slate-600 font-black text-xs uppercase tracking-widest hover:text-emerald-600 transition">Support</Link>
            <a href="mailto:info@2rivers.org" className="text-slate-600 font-black text-xs uppercase tracking-widest hover:text-emerald-600 transition">Contact</a>
          </div>
          <div className="mt-20 pt-10 border-t border-slate-50 text-[10px] text-slate-300 font-bold uppercase tracking-[0.2em]">
            © 2024 Two Rivers Industries, Inc. | Designed for the Community
          </div>
        </div>
      </footer>
    </div>
  );
}
