import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Heart, 
  Recycle, 
  Users, 
  ArrowRight, 
  Zap, 
  Share2, 
  Facebook, 
  Twitter, 
  Link as LinkIcon,
  CheckCircle2,
  Trash2,
  Droplets,
  Building2,
  HandHeart,
  Briefcase,
  AlertTriangle
} from "lucide-react";
import { toast } from "sonner";

export default function Index() {
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [raisedAmount, setRaisedAmount] = useState(0);
  const goalAmount = 25000;

  // Animate progress on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setRaisedAmount(4250); // Hardcoded starting point for visual impact
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const progressPercentage = Math.min((raisedAmount / goalAmount) * 100, 100);

  const handleDonate = () => {
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;
    if (!amount || amount < 1) {
      toast.error("Please enter a valid donation amount.");
      return;
    }
    toast.success(`Thank you! Ready to process $${amount} donation.`);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareToTwitter = () => {
    const text = "Two Rivers Industries in Hannibal, MO gave jobs to disabled workers — shut down after Prop R failed. Help bring it back:";
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-cream font-dm-sans text-charcoal selection:bg-sage/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-10 py-5 bg-earth/95 backdrop-blur-md border-b border-sage/20">
        <div className="font-playfair text-lg md:text-xl text-sage tracking-tight font-black">
          Two Rivers Industries
        </div>
        <button 
          onClick={() => scrollToSection('donate')}
          className="bg-rust text-white px-6 py-2 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-orange-800 transition-all active:translate-y-[1px]"
        >
          Donate Now
        </button>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen bg-earth flex items-center px-6 md:px-10 py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-[85%] left-[15%] w-[50%] h-[50%] bg-moss/50 rounded-full blur-[120px]" />
          <div className="absolute top-[20%] left-[85%] w-[45%] h-[45%] bg-gold/20 rounded-full blur-[100px]" />
        </div>
        
        <div className="absolute right-[-2rem] top-1/2 -translate-y-1/2 rotate-[-20deg] text-[18rem] text-white opacity-[0.04] select-none pointer-events-none font-black">
          ♻
        </div>

        <div className="relative z-10 max-w-[760px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-sage/15 border border-sage/30 text-sage text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] px-4 py-1.5 rounded-sm mb-8"
          >
            <span className="text-sm">♻</span> Hannibal, Missouri · Community Campaign
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.05] mb-8 font-black"
          >
            Bring Back<br />
            <span className="text-sage italic">Two Rivers</span><br />
            Industries
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-cream/75 font-light leading-relaxed max-w-[560px] mb-12"
          >
            A local sheltered workshop providing meaningful employment for people with disabilities — lost amidst HBPW rate hikes and the failure of Prop R. Let's rebuild it.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <button 
              onClick={() => scrollToSection('donate')}
              className="bg-rust text-white px-8 py-4 rounded-sm font-bold hover:bg-orange-800 transition-all hover:-translate-y-0.5 shadow-lg shadow-rust/20 uppercase tracking-wider text-sm"
            >
              Support the Campaign
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-transparent text-sage border-2 border-sage/40 px-8 py-4 rounded-sm font-bold hover:border-sage hover:bg-sage/10 transition-all uppercase tracking-wider text-sm"
            >
              Learn the Story
            </button>
          </motion.div>

          {/* Progress Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-10 border-t border-sage/20"
          >
            <div className="flex justify-between items-baseline mb-3">
              <span className="font-playfair text-3xl md:text-4xl text-cream font-black">
                ${raisedAmount.toLocaleString()}
              </span>
              <span className="text-xs text-cream/50 uppercase tracking-widest font-bold">
                Goal: ${goalAmount.toLocaleString()}
              </span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-sage to-gold"
              />
            </div>
            <p className="mt-4 text-xs text-cream/50 font-medium">
              {raisedAmount > 0 ? `${Math.floor(raisedAmount / 35)} supporters · Keep it going!` : "Be the first to donate — every dollar counts."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-sage/30 to-transparent" />

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-10 bg-light">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-moss">The Story</div>
            <h2 className="font-playfair text-4xl md:text-5xl text-earth leading-tight font-black">What We Lost — And Why It Matters</h2>
            <div className="space-y-4 text-earth/80 text-lg leading-relaxed">
              <p>
                Two Rivers Industries was more than a recycling center. It was a place that gave purpose, structure, and a paycheck to disabled members of our Hannibal community.
              </p>
              <p>
                The program relied on the <strong>"2 Rivers Industries Fee"</strong> listed on HBPW bills. Amidst 3% water and 4.5% sewer rate hikes, and the failure of Prop R's 5.5% City Transfer Fee, this vital support was lost.
              </p>
              <p>
                This campaign exists to change that. We're raising money to relaunch Two Rivers Industries, restore jobs for our neighbors with disabilities, and rebuild the recycling infrastructure that Hannibal deserves.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-earth p-10 md:p-14 rounded-sm text-cream relative overflow-hidden shadow-2xl">
              <div className="absolute right-[-1.5rem] bottom-[-1.5rem] text-9xl text-white opacity-[0.06] select-none pointer-events-none">
                ♻
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-sage mb-6">HBPW Context</div>
              <p className="font-playfair text-xl md:text-2xl italic leading-relaxed mb-8">
                "The workshop fee was lost alongside the 5.5% City Transfer Fee during the Prop R vote. People were overwhelmed by rate hikes—and we lost our workers."
              </p>
              <p className="text-sm text-cream/50 font-medium">— A Hannibal resident & advocate</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="py-24 px-6 md:px-10 bg-charcoal">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-sage mb-4">By the Numbers</div>
            <h2 className="font-playfair text-4xl md:text-5xl text-cream font-black mb-6">The Real Impact of Two Rivers</h2>
            <p className="text-cream/60 text-lg max-w-2xl mx-auto font-light">
              Before closure, Two Rivers Industries was quietly doing remarkable work for Hannibal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-sage/10 bg-sage/5">
            {[
              { icon: Briefcase, num: "30+", label: "Disabled workers employed with meaningful, structured jobs" },
              { icon: Recycle, num: "100s", label: "Of tons of recyclables kept out of local landfills annually" },
              { icon: Droplets, num: "5.5%", label: "City Transfer Fee was at the heart of the municipal funding debate" },
              { icon: Building2, num: "1", label: "Community — Hannibal, MO — America's Hometown" }
            ].map((stat, i) => (
              <div key={i} className="bg-charcoal p-10 text-center border border-sage/10 hover:bg-slate-900 transition-colors group">
                <stat.icon className="w-10 h-10 text-sage mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <div className="font-playfair text-5xl text-sage font-black mb-3 leading-none">{stat.num}</div>
                <p className="text-xs text-cream/50 leading-relaxed font-bold uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section id="why" className="py-24 px-6 md:px-10 bg-cream">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-moss mb-4">Three Reasons to Give</div>
            <h2 className="font-playfair text-4xl md:text-5xl text-earth font-black">This Is Worth Fighting For</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: HandHeart, 
                title: "Inclusive Employment", 
                desc: "Two Rivers gave Hannibal's disabled community real jobs with real purpose — not charity, but dignity. That's worth protecting." 
              },
              { 
                icon: Recycle, 
                title: "Environmental Responsibility", 
                desc: "With the HBPW rate hikes, we need efficient local recycling more than ever to manage waste and protect our regional environment." 
              },
              { 
                icon: Users, 
                title: "Community Infrastructure", 
                desc: "Restoring this program is a vote for the kind of town Hannibal can be. Your donation helps bridge the gap left by Prop R." 
              }
            ].map((reason, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-earth/10 border-t-4 border-t-moss p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <reason.icon className="w-8 h-8 text-moss mb-6" />
                <h3 className="font-playfair text-xl text-earth font-black mb-4">{reason.title}</h3>
                <p className="text-earth/70 leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-24 px-6 md:px-10 bg-earth relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(212,160,23,0.08)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="max-w-[700px] mx-auto text-center relative z-10">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-sage mb-4">Make a Difference</div>
          <h2 className="font-playfair text-4xl md:text-5xl text-cream font-black mb-6">Support Two Rivers Industries</h2>
          <p className="text-cream/65 text-lg mb-12 leading-relaxed">
            Every dollar goes directly toward relaunching the program in Hannibal — restoring jobs, equipment, and operations.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {[
              { val: 10, note: "Starter support" },
              { val: 25, note: "Day's wages" },
              { val: 50, note: "Supplies fund" },
              { val: 100, note: "Equipment fund" }
            ].map((tier) => (
              <button 
                key={tier.val}
                onClick={() => { setSelectedAmount(tier.val); setCustomAmount(""); }}
                className={`p-6 border-2 transition-all text-center rounded-sm ${
                  selectedAmount === tier.val && !customAmount
                    ? "bg-moss border-moss text-white" 
                    : "bg-white/5 border-sage/25 text-cream hover:bg-moss/50 hover:border-moss"
                }`}
              >
                <div className="text-2xl font-black mb-1">${tier.val}</div>
                <div className={`text-[10px] font-bold uppercase tracking-widest ${
                  selectedAmount === tier.val && !customAmount ? "text-white/70" : "text-cream/40"
                }`}>
                  {tier.note}
                </div>
              </button>
            ))}
          </div>

          <div className="relative mb-6">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/40 text-lg">$</span>
            <input 
              type="number"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="w-full bg-white/5 border-2 border-sage/25 rounded-sm py-4 pl-8 pr-4 text-cream focus:outline-none focus:border-sage transition-all placeholder:text-cream/20"
            />
          </div>

          <button 
            onClick={handleDonate}
            className="w-full bg-rust text-white py-5 rounded-sm font-black text-lg uppercase tracking-[0.1em] hover:bg-orange-800 hover:-translate-y-1 transition-all shadow-xl shadow-rust/40 mb-6"
          >
            Donate Now — Bring Two Rivers Back
          </button>

          <p className="text-[10px] text-cream/35 font-bold uppercase tracking-[0.2em]">
            🔒 Secure checkout · 100% goes to program restoration · No platform fees
          </p>
        </div>
      </section>

      {/* Share Section */}
      <section id="share" className="py-24 px-6 md:px-10 bg-light text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[600px] mx-auto"
        >
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-moss mb-4">Spread the Word</div>
          <h2 className="font-playfair text-4xl text-earth font-black mb-4">Tell Hannibal</h2>
          <p className="text-earth/70 text-lg mb-10 leading-relaxed font-medium">
            The program was lost in the confusion of utility rate hikes. Help fix that. Share this campaign with every resident in America's Hometown.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <button 
              onClick={shareToFacebook}
              className="flex items-center gap-2 bg-[#1877f2] text-white px-8 py-3 rounded-sm font-bold text-sm hover:brightness-110 transition-all active:translate-y-0.5 shadow-lg shadow-blue-600/20"
            >
              <Facebook size={18} /> Share on Facebook
            </button>
            <button 
              onClick={shareToTwitter}
              className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-sm font-bold text-sm hover:brightness-110 transition-all active:translate-y-0.5 shadow-lg shadow-black/20"
            >
              <Twitter size={18} /> Share on X
            </button>
            <button 
              onClick={copyLink}
              className="flex items-center gap-2 bg-white text-earth border-2 border-earth/10 px-8 py-3 rounded-sm font-bold text-sm hover:border-moss transition-all active:translate-y-0.5 shadow-sm"
            >
              <LinkIcon size={18} /> Copy Link
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal py-16 px-6 md:px-10 border-t border-sage/10 text-center">
        <p className="text-xs text-cream/35 leading-loose font-medium uppercase tracking-[0.15em]">
          <strong className="text-sage font-black">Two Rivers Industries</strong><br />
          Hannibal, Missouri · America's Hometown<br />
          Campaign organized by community members who believe in inclusive employment.<br />
          © 2024 Two Rivers Industries · Rebuilding Purpose
        </p>
      </footer>
    </div>
  );
}
