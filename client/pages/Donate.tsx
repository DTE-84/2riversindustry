import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, 
  Gift, 
  Users, 
  MapPin, 
  Phone, 
  ArrowLeft, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  CreditCard,
  Package,
  ArrowRight,
  AlertCircle
} from "lucide-react";
import { toast } from "sonner";

export default function Donate() {
  const [donationType, setDonationType] = useState<"monetary" | "items">("monetary");
  const [amount, setAmount] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const donationAmounts = [
    { amount: 10, label: "The Neighbor", impact: "Helps cover utility costs for one day." },
    { amount: 25, label: "The Supporter", impact: "Supports 1 hour of vocational training." },
    { amount: 100, label: "The Advocate", impact: "Funds a week of workshop operations." },
    { amount: 500, label: "The Bridge Builder", impact: "Sustains a department for a full month." },
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
    try {
      const response = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, type: "monetary", ...formData }),
      });
      const data = await response.json();
      if (data.success) {
        setStep(3);
        toast.success("Uplink Established. Thank you for your support!");
      } else {
        throw new Error(data.message);
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to process contribution.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 selection:bg-emerald-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black group-hover:bg-emerald-600 transition-colors">
              2R
            </div>
            <span className="font-black text-lg tracking-tighter text-slate-900 uppercase">Two Rivers</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-slate-500 font-bold text-sm hover:text-slate-900 transition">
            <ArrowLeft size={16} /> Back to Hub
          </Link>
        </nav>
      </header>

      {/* Hero: Urgent Mission */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={`${import.meta.env.BASE_URL}community.webp`} alt="" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-900/50" />
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full mb-8"
          >
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-bold text-[10px] uppercase tracking-[0.2em]">Urgent Reopening Fund</span>
          </motion.div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">
            The Future is in <br/>
            <span className="text-emerald-400 italic font-serif">Your Hands.</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-0 font-medium leading-relaxed">
            Every contribution directly funds the restoration of operations at Two Rivers Industries. Help us get 40+ workers back to their jobs.
          </p>
        </div>
      </section>

      {/* Main Donation Hub */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Impact Telemetry */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm">
              <h3 className="text-lg font-black text-slate-900 mb-6 uppercase tracking-tighter flex items-center gap-3">
                <span className="p-2 bg-emerald-50 rounded-lg"><CheckCircle2 className="text-emerald-600 w-5 h-5" /></span> Impact Telemetry
              </h3>
              <div className="space-y-6">
                <div className="p-5 bg-slate-50 rounded-2xl">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Status</div>
                  <div className="flex items-center gap-2 text-rose-600 font-bold">
                    <AlertCircle className="w-4 h-4" /> Operations Suspended
                  </div>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Target</div>
                  <div className="text-slate-900 font-bold">$150,000 Reopening Goal</div>
                </div>
                <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <div className="text-[10px] font-black text-emerald-600/60 uppercase tracking-widest mb-1">Your Contribution</div>
                  <div className="text-emerald-900 font-black text-2xl">${amount || "0.00"}</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-[2rem] text-white overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h4 className="text-sm font-black uppercase tracking-widest mb-4 text-emerald-400">Why Now?</h4>
              <p className="text-slate-400 text-sm leading-relaxed font-medium italic">
                "Our employees aren't just workers—they are members of a family. Every day we are closed is a day of lost connection, purpose, and dignity. Your donation bridges that gap."
              </p>
            </div>
          </div>

          {/* Right Side: Step-Based Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-100 p-8 flex justify-between items-center">
                <div className="flex gap-2">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className={`w-10 h-1.5 rounded-full transition-colors ${s <= step ? "bg-emerald-500" : "bg-slate-200"}`} />
                  ))}
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Step {step} of 3</div>
              </div>

              <div className="p-8 sm:p-12">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Choose Your Impact</h2>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {donationAmounts.map((tier) => (
                          <button
                            key={tier.amount}
                            onClick={() => setAmount(tier.amount.toString())}
                            className={`p-6 rounded-2xl border-2 text-left transition-all ${
                              amount === tier.amount.toString()
                                ? "border-emerald-500 bg-emerald-50 shadow-lg shadow-emerald-500/5"
                                : "border-slate-100 hover:border-emerald-200 hover:bg-slate-50"
                            }`}
                          >
                            <div className="text-2xl font-black text-slate-900 mb-1">${tier.amount}</div>
                            <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-3">{tier.label}</div>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed">{tier.impact}</p>
                          </button>
                        ))}
                      </div>

                      <div className="relative">
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Or enter a custom amount</label>
                        <div className="relative">
                          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 font-black text-xl">$</span>
                          <input
                            type="number"
                            placeholder="0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-5 pl-12 pr-6 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-black text-xl text-slate-900"
                          />
                        </div>
                      </div>

                      <button
                        onClick={handleMonetaryDonation}
                        className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-emerald-600 transition-all shadow-xl shadow-slate-900/10 uppercase tracking-tighter"
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
                      <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Your Information</h2>
                      <div className="space-y-4">
                        <div className="relative">
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Full Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Hannibal Resident"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-bold"
                          />
                        </div>
                        <div className="relative">
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Email Address</label>
                          <input
                            type="email"
                            required
                            placeholder="neighbor@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-bold"
                          />
                        </div>
                      </div>

                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="flex items-center gap-3 text-emerald-600 font-bold text-sm mb-2">
                          <ShieldCheck className="w-5 h-5" /> Secure Uplink
                        </div>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">
                          Your donation is tax-deductible and secured with high-fidelity encryption. A receipt will be dispatched to your email immediately.
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="w-20 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center hover:bg-slate-200 transition-colors"
                        >
                          <ArrowLeft size={24} />
                        </button>
                        <button
                          type="submit"
                          disabled={loading}
                          className="flex-1 bg-emerald-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 uppercase tracking-tighter disabled:opacity-50"
                        >
                          {loading ? "Establishing Uplink..." : `Complete $${amount} Donation`}
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
                      <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-slow">
                        <Heart className="w-12 h-12 text-emerald-600 fill-current" />
                      </div>
                      <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Uplink Successful!</h2>
                      <p className="text-slate-500 text-lg font-medium max-w-sm mx-auto">
                        Thank you, <span className="text-slate-900 font-black">{formData.name}</span>. Your contribution of <span className="text-emerald-600 font-black">${amount}</span> is officially part of the Reopening Fund.
                      </p>
                      <div className="pt-8">
                        <Link to="/" className="inline-flex items-center gap-2 bg-slate-900 text-white px-10 py-4 rounded-xl font-black hover:bg-emerald-600 transition-all uppercase tracking-tighter text-sm">
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
      <footer className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] mb-8">
            Hannibal's Heart • Missouri's Pride
          </p>
          <div className="flex justify-center gap-8 mb-12">
            <a href="tel:573-221-3211" className="flex items-center gap-2 text-slate-900 font-black text-sm uppercase tracking-tighter hover:text-emerald-600 transition">
              <Phone size={18} /> 573.221.3211
            </a>
            <div className="flex items-center gap-2 text-slate-900 font-black text-sm uppercase tracking-tighter">
              <MapPin size={18} /> 659 Clinic Road, Hannibal
            </div>
          </div>
          <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest italic">
            All donations are tax-deductible. Two Rivers Industries is a registered 501(c)(3) non-profit organization.
          </p>
        </div>
      </footer>
    </div>
  );
}
