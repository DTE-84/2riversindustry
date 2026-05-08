import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, 
  ArrowLeft, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  AlertCircle,
  Droplets
} from "lucide-react";
import { toast } from "sonner";

export default function Donate() {
  const [amount, setAmount] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const donationAmounts = [
    { amount: 10, label: "The Neighbor", impact: "Helps cover immediate operational startup costs." },
    { amount: 25, label: "The Supporter", impact: "Supports 1 hour of specialized vocational training." },
    { amount: 100, label: "The Advocate", impact: "Funds a week of essential workshop supplies." },
    { amount: 500, label: "The Bridge Builder", impact: "Sustains a department relaunch for a full month." },
  ];

  const handleMonetaryDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!amount || parseFloat(amount) <= 0) {
        toast.error("Please select or enter a valid amount.");
        return;
      }
      setStep(2);
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setStep(3);
      toast.success("Contribution logged. Thank you for your support!");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal selection:bg-sage/20 font-dm-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-earth/95 backdrop-blur-md border-b border-sage/20">
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-sage rounded-sm flex items-center justify-center text-earth font-black group-hover:bg-gold transition-colors">
              2R
            </div>
            <span className="font-playfair font-black text-lg tracking-tight text-sage uppercase">Two Rivers</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sage/70 font-bold text-xs uppercase tracking-widest hover:text-sage transition">
            <ArrowLeft size={16} /> Back to Hub
          </Link>
        </nav>
      </header>

      {/* Hero: Urgent Mission */}
      <section className="relative py-20 bg-earth overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/community.webp" alt="" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-earth via-earth/90 to-moss/50" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-sage/10 border border-sage/20 px-4 py-2 rounded-sm mb-8"
          >
            <Zap className="w-4 h-4 text-sage" />
            <span className="text-sage font-bold text-[10px] uppercase tracking-[0.2em]">Urgent Reopening Fund</span>
          </motion.div>
          <h1 className="font-playfair text-5xl md:text-7xl font-black text-cream mb-6 tracking-tight uppercase leading-[0.9]">
            Reclaim the <br/>
            <span className="text-sage italic">Purpose.</span>
          </h1>
          <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-0 font-medium leading-relaxed">
            The HBPW funding gap must be bridged. Your contribution directly funds the restoration of jobs for our 30+ workshop employees in Hannibal.
          </p>
        </div>
      </section>

      {/* Main Donation Hub */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Impact Telemetry */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-earth/5 p-8 rounded-sm shadow-xl">
              <h3 className="font-playfair text-lg font-black text-earth mb-6 uppercase tracking-tight flex items-center gap-3">
                <span className="p-2 bg-sage/10 rounded-sm"><CheckCircle2 className="text-moss w-5 h-5" /></span> Impact Telemetry
              </h3>
              <div className="space-y-6">
                <div className="p-5 bg-light rounded-sm">
                  <div className="text-[10px] font-black text-moss/60 uppercase tracking-widest mb-1">Current Status</div>
                  <div className="flex items-center gap-2 text-rust font-bold">
                    <AlertCircle className="w-4 h-4" /> Operations Suspended
                  </div>
                </div>
                <div className="p-5 bg-light rounded-sm">
                  <div className="text-[10px] font-black text-moss/60 uppercase tracking-widest mb-1">Funding Need</div>
                  <div className="text-earth font-bold uppercase text-[10px] tracking-tight">HBPW Workshop Fee Restoration</div>
                </div>
                <div className="p-5 bg-sage/5 rounded-sm border border-sage/20">
                  <div className="text-[10px] font-black text-moss uppercase tracking-widest mb-1">Your Contribution</div>
                  <div className="text-earth font-playfair font-black text-3xl">${amount || "0.00"}</div>
                </div>
              </div>
            </div>

            <div className="bg-earth p-8 rounded-sm text-cream overflow-hidden relative group shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sage/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 text-sage">The Human Element</h4>
              <p className="text-cream/60 text-sm leading-relaxed font-medium italic">
                "Our employees aren't just workers—they are members of a family. Every day we are closed is a day of lost connection and dignity in Hannibal. You can help us open the doors again."
              </p>
            </div>
          </div>

          {/* Right Side: Step-Based Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-earth/5 rounded-sm shadow-2xl overflow-hidden">
              <div className="bg-light border-b border-earth/5 p-8 flex justify-between items-center">
                <div className="flex gap-2">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className={`w-10 h-1 rounded-full transition-colors ${s <= step ? "bg-moss" : "bg-earth/10"}`} />
                  ))}
                </div>
                <div className="text-[10px] font-black text-moss/50 uppercase tracking-widest">Step {step} of 3</div>
              </div>

              <div className="p-8 md:p-12">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <h2 className="font-playfair text-2xl font-black text-earth uppercase tracking-tight">Choose Your Impact</h2>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {donationAmounts.map((tier) => (
                          <button
                            key={tier.amount}
                            onClick={() => setAmount(tier.amount.toString())}
                            className={`p-6 rounded-sm border-2 text-left transition-all ${
                              amount === tier.amount.toString()
                                ? "border-moss bg-sage/5 shadow-lg shadow-moss/5"
                                : "border-earth/5 hover:border-sage hover:bg-light"
                            }`}
                          >
                            <div className="font-playfair text-3xl font-black text-earth mb-1">${tier.amount}</div>
                            <div className="text-[10px] font-black text-moss uppercase tracking-widest mb-3">{tier.label}</div>
                            <p className="text-xs text-earth/50 font-medium leading-relaxed">{tier.impact}</p>
                          </button>
                        ))}
                      </div>

                      <div className="relative">
                        <label className="block text-[10px] font-black text-moss/50 uppercase tracking-[0.2em] mb-3 px-1">Or enter a custom amount</label>
                        <div className="relative">
                          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-earth/20 font-black text-xl">$</span>
                          <input
                            type="number"
                            placeholder="0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full bg-light border-2 border-earth/5 rounded-sm py-5 pl-12 pr-6 focus:outline-none focus:border-moss focus:bg-white transition-all font-playfair font-black text-2xl text-earth"
                          />
                        </div>
                      </div>

                      <button
                        onClick={() => setStep(2)}
                        className="w-full bg-rust text-white py-5 rounded-sm font-black text-lg hover:bg-orange-800 transition-all shadow-xl shadow-rust/20 uppercase tracking-widest"
                      >
                        Continue to Details
                      </button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.form 
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      onSubmit={handleMonetaryDonation}
                      className="space-y-8"
                    >
                      <h2 className="font-playfair text-2xl font-black text-earth uppercase tracking-tight">Your Information</h2>
                      <div className="space-y-4">
                        <div className="relative">
                          <label className="block text-[10px] font-black text-moss/50 uppercase tracking-widest mb-2 px-1">Full Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Hannibal Resident"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-light border-2 border-earth/5 rounded-sm py-4 px-6 focus:outline-none focus:border-moss focus:bg-white transition-all font-bold"
                          />
                        </div>
                        <div className="relative">
                          <label className="block text-[10px] font-black text-moss/50 uppercase tracking-widest mb-2 px-1">Email Address</label>
                          <input
                            type="email"
                            required
                            placeholder="neighbor@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-light border-2 border-earth/5 rounded-sm py-4 px-6 focus:outline-none focus:border-moss focus:bg-white transition-all font-bold"
                          />
                        </div>
                      </div>

                      <div className="p-6 bg-light rounded-sm border border-earth/5">
                        <div className="flex items-center gap-3 text-moss font-bold text-xs uppercase tracking-widest mb-3">
                          <ShieldCheck className="w-5 h-5" /> Secure Checkout
                        </div>
                        <p className="text-[10px] text-earth/50 font-medium leading-relaxed uppercase tracking-wider">
                          Your donation is tax-deductible. All transactions are encrypted and processed securely for the Hannibal Region.
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="w-20 bg-light text-moss/40 rounded-sm flex items-center justify-center hover:bg-earth/5 transition-colors border border-earth/5"
                        >
                          <ArrowLeft size={24} />
                        </button>
                        <button
                          type="submit"
                          disabled={loading}
                          className="flex-1 bg-moss text-white py-5 rounded-sm font-black text-lg hover:bg-earth transition-all shadow-xl shadow-moss/20 uppercase tracking-widest disabled:opacity-50"
                        >
                          {loading ? "Processing..." : `Complete $${amount} Donation`}
                        </button>
                      </div>
                    </motion.form>
                  )}

                  {step === 3 && (
                    <motion.div 
                      key="step3"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center space-y-8 py-12"
                    >
                      <div className="w-24 h-24 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                        <Heart className="w-12 h-12 text-moss fill-current" />
                      </div>
                      <h2 className="font-playfair text-4xl font-black text-earth uppercase tracking-tight">Support Logged</h2>
                      <p className="text-earth/60 text-lg font-medium max-w-sm mx-auto">
                        Thank you, <span className="text-earth font-black">{formData.name}</span>. Your contribution of <span className="text-moss font-black">${amount}</span> is officially part of the Hannibal Reopening Fund.
                      </p>
                      <div className="pt-8">
                        <Link to="/" className="inline-flex items-center gap-2 bg-earth text-white px-10 py-4 rounded-sm font-black hover:bg-moss transition-all uppercase tracking-widest text-xs shadow-xl shadow-earth/20">
                          Return to Hub <ArrowRight size={16} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <footer className="bg-white py-20 border-t border-earth/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-moss/40 text-[10px] font-black uppercase tracking-[0.5em] mb-8">
            Hannibal's Heart • Missouri's Pride
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-earth font-black text-xs uppercase tracking-widest">
              <Droplets size={18} className="text-moss" /> HBPW Fee Restoration
            </div>
            <div className="flex items-center gap-2 text-earth font-black text-xs uppercase tracking-widest">
              659 Clinic Road, Hannibal, MO
            </div>
          </div>
          <p className="text-[10px] text-moss/30 font-bold uppercase tracking-widest italic">
            Two Rivers Industries is a registered 501(c)(3) non-profit organization.
          </p>
        </div>
      </footer>
    </div>
  );
}
