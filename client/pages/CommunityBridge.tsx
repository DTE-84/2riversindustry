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
  Star,
  Sun,
  Smile,
  HandHeart,
  Globe,
  Navigation,
  ArrowLeft,
  FileText
} from "lucide-react";

export default function CommunityBridge() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-cream text-charcoal font-dm-sans selection:bg-sage/20">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-earth/95 backdrop-blur-md border-b border-sage/20">
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-sage rounded-sm flex items-center justify-center text-earth font-black group-hover:bg-gold transition-colors">
              2R
            </div>
            <span className="font-playfair font-black text-lg tracking-tight text-sage uppercase">Two Rivers</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/" className="hidden sm:flex items-center gap-2 text-sage/70 font-bold text-xs uppercase tracking-widest hover:text-sage transition">
              <ArrowLeft size={16} /> Hub
            </Link>
            <Link to="/donate" className="bg-rust text-white px-6 py-2 rounded-sm hover:bg-orange-800 transition font-bold text-xs uppercase tracking-widest shadow-lg shadow-rust/20">
              Support the Mission
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero: Welcoming & Bright */}
      <section className="relative py-24 sm:py-32 bg-earth overflow-hidden text-center">
        {/* Decorative Light Leaks */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-sage/50 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] bg-gold/20 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-sage/10 border border-sage/20 px-5 py-2 rounded-sm mb-10 shadow-sm"
          >
            <Sun className="w-4 h-4 text-gold animate-spin-slow" />
            <span className="text-sage font-bold text-xs uppercase tracking-[0.2em]">America's Hometown Bridge</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-playfair text-5xl sm:text-8xl font-black text-cream mb-8 leading-[1] tracking-tight"
          >
            Bridging the Gap <br/>
            <span className="text-sage italic">In Hannibal.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-cream/70 text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
          >
            The failure of Prop R and the removal of HBPW workshop fees has left our employees without a place to call home. We're here to explain the numbers and rebuild the path.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link to="/donate" className="bg-rust text-white px-12 py-5 rounded-sm font-black hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-rust/30 uppercase tracking-widest text-sm group">
              Bridge the Gap <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Community Pillars */}
      <section className="py-24 bg-white border-y border-earth/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { icon: HandHeart, title: "Dignity", desc: "Honoring the unique abilities of every Hannibal resident.", color: "text-rust", bg: "bg-rust/5" },
              { icon: Globe, title: "Purpose", desc: "Restoring a sense of belonging through meaningful work.", color: "text-earth", bg: "bg-earth/5" },
              { icon: Users, title: "Family", desc: "A supportive network that stands together.", color: "text-gold", bg: "bg-gold/5" },
              { icon: Navigation, title: "Future", desc: "Navigating HBPW changes with local optimism.", color: "text-sage", bg: "bg-sage/5" }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className={`w-20 h-20 ${pillar.bg} rounded-sm flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform shadow-sm`}>
                  <pillar.icon className={`w-10 h-10 ${pillar.color}`} />
                </div>
                <h3 className="font-playfair text-lg font-black text-earth mb-2 uppercase tracking-tight">{pillar.title}</h3>
                <p className="text-earth/50 text-xs leading-relaxed font-bold uppercase tracking-wider">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Clarity Report */}
      <section id="truth" className="py-32 relative overflow-hidden bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="inline-flex items-center gap-3 text-moss font-black text-xs uppercase tracking-[0.2em]">
                <span className="w-8 h-px bg-moss" /> The Clarity Report
              </div>
              <h2 className="font-playfair text-5xl sm:text-6xl font-black text-earth leading-[1] tracking-tight uppercase">
                The HBPW <br/>
                <span className="text-moss">Funding Storm.</span>
              </h2>
              <div className="space-y-8 text-earth/70 text-lg leading-relaxed font-medium">
                <p>
                  Two Rivers Industries was hit by a "perfect storm" of utility fee changes. The direct <strong>2 Rivers Industries Fee</strong> (formerly NE Mo Sheltered Workshop Fee) was lost alongside the broader <strong>5.5% City Transfer Fee</strong>.
                </p>
                <p className="bg-sage/10 p-8 rounded-sm border-l-8 border-sage italic text-earth text-xl font-playfair">
                  "Voters were overwhelmed by a 3% water hike and a 4.5% sewer hike. In the confusion, Prop R failed and our direct support vanished."
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 bg-earth/5 rounded-sm flex items-center justify-center shrink-0 shadow-inner">
                    <Droplets className="w-7 h-7 text-moss" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg font-black text-earth mb-1 uppercase tracking-tight">Rate Pressure</h4>
                    <p className="text-[10px] text-earth/50 font-bold uppercase tracking-wider">The 3% water and 4.5% sewer hikes created a "vote no" environment.</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 bg-gold/10 rounded-sm flex items-center justify-center shrink-0 shadow-inner">
                    <Star className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg font-black text-earth mb-1 uppercase tracking-tight">Fee Separation</h4>
                    <p className="text-[10px] text-earth/50 font-bold uppercase tracking-wider">The separate 5.5% Transfer Fee became the primary municipal debate.</p>
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
              <div className="relative bg-white border border-earth/5 p-10 sm:p-14 rounded-sm shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sage to-moss" />
                <h3 className="font-playfair text-2xl font-black text-earth mb-10 flex items-center gap-4 uppercase tracking-tight">
                  <span className="p-3 bg-light rounded-sm"><FileText className="text-moss w-6 h-6" /></span> Fee Breakdown
                </h3>
                
                <div className="space-y-12">
                  <div className="space-y-6">
                    {[
                      { icon: Droplets, color: "text-rust", bg: "bg-rust/5", label: "2 Rivers Industries Fee", value: "Direct Workshop Support (LOST)" },
                      { icon: Navigation, color: "text-gold", bg: "bg-gold/5", label: "City Transfer Fee", value: "5.5% Municipal Service Fee" },
                      { icon: Zap, color: "text-sage", bg: "bg-sage/5", label: "Utility Rate Hikes", value: "3% Water / 4.5% Sewer" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-5 p-4 rounded-sm hover:bg-light transition-colors">
                        <div className={`w-12 h-12 ${item.bg} rounded-sm flex items-center justify-center shrink-0`}>
                          <item.icon className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <div>
                          <div className="text-[10px] font-black text-earth/40 uppercase tracking-widest mb-0.5">{item.label}</div>
                          <div className="text-earth font-bold text-sm uppercase tracking-tight">{item.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link to="/donate" className="block w-full bg-rust text-white text-center py-5 rounded-sm font-black hover:bg-orange-800 transition shadow-xl shadow-rust/20 uppercase tracking-widest text-xs group">
                    Bridge the Gap Now <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="py-32 relative overflow-hidden bg-earth">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="w-24 h-24 bg-sage/10 rounded-sm flex items-center justify-center mx-auto mb-10 border border-sage/20 backdrop-blur-md"
          >
            <HandHeart className="w-12 h-12 text-sage" />
          </motion.div>
          
          <h2 className="font-playfair text-5xl sm:text-8xl font-black text-white mb-10 leading-[1] tracking-tight uppercase">
            Let's Show them <br/>
            <span className="text-sage italic">Hannibal Cares.</span>
          </h2>
          
          <p className="text-cream/70 text-xl mb-14 leading-relaxed font-medium max-w-2xl mx-auto">
            HBPW bill confusion doesn't define America's Hometown. Our actions do. Join the movement to bridge the gap and keep Two Rivers thriving for decades to come.
          </p>
          
          <Link to="/donate" className="inline-flex items-center gap-4 bg-rust text-white px-16 py-6 rounded-sm font-black text-2xl hover:scale-105 hover:bg-orange-800 transition-all shadow-2xl shadow-rust/40 group uppercase tracking-widest">
            DONATE NOW <Heart className="w-8 h-8 group-hover:scale-125 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Global Footer */}
      <footer className="bg-charcoal py-20 border-t border-sage/10 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sage/40 text-[10px] font-black uppercase tracking-[0.5em] mb-8">
            Two Rivers Industries • Hannibal, MO
          </p>
          <div className="flex justify-center gap-12 mb-12">
            <Link to="/" className="text-cream/50 font-black text-[10px] uppercase tracking-widest hover:text-sage transition">Home</Link>
            <Link to="/employment" className="text-cream/50 font-black text-[10px] uppercase tracking-widest hover:text-sage transition">Employment</Link>
            <Link to="/donate" className="text-cream/50 font-black text-[10px] uppercase tracking-widest hover:text-sage transition">Support</Link>
          </div>
          <p className="text-[10px] text-cream/20 font-bold uppercase tracking-[0.2em]">
            © 2024 Two Rivers Industries, Inc. | America's Hometown
          </p>
        </div>
      </footer>
    </div>
  );
}
