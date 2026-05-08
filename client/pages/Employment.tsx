import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, CheckCircle, MapPin, Phone, Clock, ArrowLeft, Users, Sparkles, ShieldCheck } from "lucide-react";

export default function Employment() {
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

      {/* Hero Section */}
      <section className="relative py-24 bg-earth overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-moss/20 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-sage/10 border border-sage/20 px-4 py-2 rounded-sm mb-8"
          >
            <Users className="w-4 h-4 text-sage" />
            <span className="text-sage font-bold text-[10px] uppercase tracking-[0.2em]">Restoring Hannibal's Workforce</span>
          </motion.div>
          <h1 className="font-playfair text-5xl md:text-7xl font-black text-cream mb-6 tracking-tight uppercase leading-[0.9]">
            Dignity through Work,<br/>
            <span className="text-sage italic">Restored for Hannibal.</span>
          </h1>
          <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-0 font-medium leading-relaxed">
            While Hannibal operations are temporarily suspended, we are actively preparing for our relaunch. Join the registry for future regional opportunities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-10 max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Mission Context */}
          <div className="md:col-span-7 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl text-earth font-black mb-6 uppercase tracking-tight">Our Local Commitment</h2>
              <p className="text-earth/70 text-lg leading-relaxed mb-6">
                Two Rivers Industries is dedicated to providing inclusive employment for individuals with disabilities in the Hannibal region. We believe in high-fidelity support for every worker's unique ability.
              </p>
              <p className="text-earth/70 text-lg leading-relaxed">
                As we work to bridge the gap left by Prop R and HBPW fee changes, we are maintaining a registry of Hannibal residents who wish to be part of our workforce upon reopening.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Sparkles, title: "Regional Impact", desc: "Stable jobs with local community focus." },
                { icon: Users, title: "Vocational Growth", desc: "Specialized training for Hannibal residents." },
                { icon: ShieldCheck, title: "Inclusive Home", desc: "A caring environment in America's Hometown." }
              ].map((pill, i) => (
                <div key={i} className="bg-white border border-earth/5 p-6 rounded-sm shadow-sm hover:shadow-md transition-all">
                  <pill.icon className="w-8 h-8 text-moss mb-4" />
                  <h3 className="font-playfair text-lg text-earth font-black mb-2 uppercase tracking-tight">{pill.title}</h3>
                  <p className="text-[10px] text-earth/50 font-bold uppercase tracking-wider">{pill.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Action & Contact */}
          <div className="md:col-span-5 space-y-8">
            <div className="bg-earth p-10 rounded-sm text-cream relative overflow-hidden shadow-2xl">
              <div className="absolute right-[-1rem] bottom-[-1rem] text-8xl text-white opacity-[0.05] pointer-events-none">♻</div>
              <h3 className="font-playfair text-2xl font-black mb-6 uppercase tracking-tight">Ready to Return?</h3>
              <p className="text-cream/60 text-sm mb-8 font-medium">
                The first step for Hannibal residents is to complete our expression of interest form. We will contact you as soon as positions become available.
              </p>
              
              <button className="w-full bg-rust text-white py-4 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-orange-800 transition-all shadow-xl shadow-rust/20 mb-4">
                Download Interest Form
              </button>
              <button className="w-full bg-white/5 border border-sage/30 text-sage py-4 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-sage/10 transition-all">
                Submit Online
              </button>
            </div>

            <div className="bg-white border border-earth/5 p-8 rounded-sm shadow-sm space-y-6">
              <h4 className="text-xs font-black text-moss/50 uppercase tracking-widest">Hannibal Office Info</h4>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <MapPin className="w-5 h-5 text-moss shrink-0" />
                  <div>
                    <div className="text-xs font-black text-earth uppercase tracking-tight">Visit Us</div>
                    <div className="text-[10px] text-earth/50 font-medium">659 Clinic Road, Hannibal, MO</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Phone className="w-5 h-5 text-moss shrink-0" />
                  <div>
                    <div className="text-xs font-black text-earth uppercase tracking-tight">Call Us</div>
                    <div className="text-[10px] text-earth/50 font-medium">573-221-3211</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Clock className="w-5 h-5 text-moss shrink-0" />
                  <div>
                    <div className="text-xs font-black text-earth uppercase tracking-tight">Inquiry Hours</div>
                    <div className="text-[10px] text-earth/50 font-medium">Mon-Fri · 9AM - 4PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-light px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-earth font-black mb-12 uppercase tracking-tight text-center">Common Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "What types of roles are in Hannibal?",
                a: "Upon reopening, we offer positions in recycling processing, document shredding, and facility maintenance, all tailored to individual abilities."
              },
              {
                q: "Is Hannibal documentation required?",
                a: "Yes, our program is specifically designed to support individuals with documented disabilities to ensure we meet vocational standards."
              },
              {
                q: "When will Two Rivers reopen?",
                a: "We are currently in a high-intensity community campaign in Hannibal. Reopening depends on reaching our fundraising goals and HBPW coordination."
              },
              {
                q: "Is regional transit provided?",
                a: "We coordinate with Hannibal local transit and provide assistance to ensure all our employees can reach the workshop safely."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 border border-earth/5 shadow-sm">
                <h4 className="font-playfair text-lg text-earth font-black mb-3 uppercase tracking-tight">{faq.q}</h4>
                <p className="text-earth/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal py-16 px-6 md:px-10 border-t border-sage/10 text-center">
        <p className="text-xs text-cream/35 leading-loose font-medium uppercase tracking-[0.15em]">
          <strong className="text-sage font-black">Two Rivers Industries</strong><br />
          Hannibal, Missouri · America's Hometown<br />
          Equal Opportunity Employer dedicated to inclusive regional growth.<br />
          © 2024 Two Rivers Industries · Your Ability Matters
        </p>
      </footer>
    </div>
  );
}
