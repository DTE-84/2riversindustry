import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Heart, Recycle, Users, MapPin, Phone, Clock, ArrowRight } from "lucide-react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Urgent Community Banner */}
      <div className="bg-slate-900 py-3 px-4 text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors" />
        <Link to="/bridge" className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest">Urgent</span>
          <span className="text-white font-medium">Help bridge the funding gap left by Prop R.</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Learn More <ArrowRight size={16} />
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
              2R
            </div>
            <span className="font-bold text-lg hidden sm:inline">Two Rivers Industries</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#mission" className="text-gray-700 hover:text-primary transition font-medium">About</a>
            <a href="#services" className="text-gray-700 hover:text-primary transition font-medium">Services</a>
            <Link to="/bridge" className="text-emerald-600 hover:text-emerald-700 transition font-bold flex items-center gap-1">
              Community Bridge
            </Link>
            <Link to="/employment" className="text-gray-700 hover:text-primary transition font-medium">Employment</Link>
            <Link to="/donate" className="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90 transition font-bold shadow-lg shadow-green-600/20">
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <a href="#mission" className="block text-gray-700 hover:text-primary transition py-2">About</a>
              <a href="#services" className="block text-gray-700 hover:text-primary transition py-2">Services</a>
              <a href="#recycling" className="block text-gray-700 hover:text-primary transition py-2">Recycling</a>
              <Link to="/employment" className="block text-gray-700 hover:text-primary transition py-2">Employment</Link>
              <a href="#contact" className="block text-gray-700 hover:text-primary transition py-2">Contact</a>
              <Link to="/donate" className="block w-full bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90 transition font-medium text-center">
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-green-400 to-gray-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering Lives Through Purpose
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
              Two Rivers Industries provides meaningful employment opportunities and community services in Hannibal, Missouri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                Support Our Mission
              </Link>
              <a href="#mission" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Two Rivers Industries, Inc., it is our mission to continuously improve our organization by emphasizing the abilities of persons with disabilities through stable, meaningful and dignified employment opportunities.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We provide training and supervision designed to increase skill level and self-esteem for each employee, while supporting our community through vital recycling and retail services.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                    <Users className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Meaningful Employment</h3>
                    <p className="text-gray-600">Stable jobs with dignity and respect</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary bg-opacity-10 rounded-lg flex items-center justify-center">
                    <Recycle className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Community Service</h3>
                    <p className="text-gray-600">Recycling and thrift store programs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Motto: Be A SPORT</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-xl">S</span>
                  <span><strong>Be SAFE</strong> - Creating secure work environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-xl">P</span>
                  <span><strong>Be PRODUCTIVE</strong> - Contributing meaningfully to society</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-xl">O</span>
                  <span><strong>Be OPTIMISTIC</strong> - Believing in our employees' potential</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-xl">R</span>
                  <span><strong>Be RESPONSIBLE</strong> - Honoring our commitments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-xl">T</span>
                  <span><strong>Be A TEAMPLAYER</strong> - Working together for success</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive services to support our community and fund our mission
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Document Shredding */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-8 border border-gray-100">
              <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Document Shredding</h3>
              <p className="text-gray-600 mb-4">Need your confidential documents securely destroyed?</p>
              <p className="text-2xl font-bold text-primary mb-2">$2.00/lb</p>
              <p className="text-sm text-gray-500">Professional, confidential destruction service</p>
            </div>

            {/* Thrift Store */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-8 border border-gray-100">
              <div className="w-14 h-14 bg-secondary bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Thrift Store</h3>
              <p className="text-gray-600 mb-4">Browse quality used items while supporting our mission</p>
              <p className="text-sm text-gray-500 font-semibold">Hours: Call for details</p>
            </div>

            {/* Recycling Program */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-8 border border-gray-100">
              <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                <Recycle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Recycling Center</h3>
              <p className="text-gray-600 mb-4">Drop off recyclables or schedule a pick-up</p>
              <p className="text-sm text-gray-500 font-semibold">Flexible pricing & convenient pickup</p>
            </div>
          </div>

          {/* Material Pick-up Pricing */}
          <div className="bg-gradient-to-r from-primary to-green-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Material Pick-Up Services</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-3">Marion County (Inside City Limits)</h4>
                <p className="text-3xl font-bold mb-2">$25</p>
                <p className="text-sm opacity-90">/trip</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3">Marion County (Outside City Limits)</h4>
                <p className="text-3xl font-bold mb-2">$30</p>
                <p className="text-sm opacity-90">/trip</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3">Ralls County</h4>
                <p className="text-3xl font-bold mb-2">$40</p>
                <p className="text-sm opacity-90">/trip</p>
              </div>
            </div>
            <p className="text-sm mt-6 opacity-90">
              <strong>We pick up:</strong> Cardboard • Electronics • Plastic (#1, #2, #5) • Metal/Aluminum • Paper • Small Equipment
            </p>
            <p className="text-sm mt-4 font-semibold">
              ⚠️ Note: Prices adjusted due to Prop R failure. <strong>Please call before bringing large equipment.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Recycling Details */}
      <section id="recycling" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 uppercase tracking-tighter">Accepted Recycling Items</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              We process a wide range of materials to fund our mission and keep Hannibal green.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Paper", items: "Newspaper & Office Paper", img: "paper.webp" },
              { title: "Cardboard", items: "Flattened boxes & packaging", img: "cardboard.webp" },
              { title: "Books", items: "Hardback, softback & magazines", img: "books.webp" },
              { title: "Aluminum", items: "Beverage & food cans", img: "aluminum.webp" },
              { title: "Electronics", items: "Computers, Flat Screens, Printers", img: "electronics.webp" },
              { title: "Plastic", items: "PET #1, HDPE #2, & #5", img: "plastic.webp" },
              { title: "Appliances", items: "Washers, Dryers, Microwaves", img: "appliances.webp" },
              { title: "Equipment", items: "Mowers, Weed Eaters, Tools", img: "smallequip.webp" },
            ].map((category, i) => (
              <div key={i} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={`${import.meta.env.BASE_URL}${category.img}`} 
                    alt={category.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-primary mb-2 uppercase tracking-tighter">{category.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{category.items}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-emerald-50 border-l-4 border-primary p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
              <Phone className="text-primary" size={28} />
            </div>
            <div>
              <p className="text-emerald-900 font-medium text-lg leading-relaxed">
                <strong>Large Equipment Note:</strong> We accept push mowers, riding mowers, and shop tools. <strong>Please call before bringing large equipment or tractors</strong> so we can ensure we have the capacity to process them safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Support */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 text-center">Supporting Our Community</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Employment for People with Disabilities</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Two Rivers Industries is committed to providing meaningful employment to individuals with disabilities in Marion and Ralls County. We believe in the abilities of all people and create a supportive environment where everyone can thrive.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Partnerships</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We proudly support the <strong>Dignity Has A Voice</strong> campaign and <strong>A Team Missouri</strong>, powered by a self-advocacy organization telling the real stories of people with disabilities and their families.
              </p>
              <a href="https://www.dignityhasavoice.org" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">
                Learn more at dignityhasavoice.org →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Sheltered Workshop */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">What is a Sheltered Workshop?</h2>
          
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              The story of Missouri's sheltered workshops began in the 1960s. Families seeking options for their children with disabilities—often desperately—began forming workshops to provide employment opportunities where traditional employment wasn't available.
            </p>
            <p>
              For most of these parents and their children, sheltered workshops became vital alternatives, providing a chance to work with dignity, earn wages, and build meaningful skills and relationships within a supportive community.
            </p>
            <p>
              Two Rivers Industries continues this legacy, honoring the vision of those pioneering families while adapting to meet the needs of today's individuals with disabilities in our region.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary to-green-600 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Our Purpose</h3>
              <p>To provide disabled individuals employment opportunities that will increase task development, self-esteem and soft-skills.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p>A community where people with disabilities are valued, employed, and empowered to reach their full potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 text-center">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Location</h3>
                  <p className="text-gray-700">659 Clinic Road<br />Hannibal, Missouri 63401<br />United States</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Clock className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Recycling Center Hours</h3>
                  <p className="text-gray-700">Call for current hours<br />659 Clinic Road</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Contact</h3>
                  <p className="text-gray-700">Call for phone number<br />We love our customers!</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary via-green-400 to-gray-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Help?</h3>
              <p className="mb-8 text-lg">
                Whether you want to donate, use our services, or learn more about our mission, we'd love to hear from you.
              </p>
              <Link to="/donate" className="block w-full bg-white text-primary px-6 py-3 rounded-lg font-bold text-center hover:bg-gray-100 transition">
                Make a Donation
              </Link>
              <p className="mt-6 text-sm opacity-90">
                Visit us during business hours at our Hannibal location!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                  2R
                </div>
                <span className="font-bold text-white">Two Rivers Industries</span>
              </div>
              <p className="text-sm">Empowering lives through meaningful employment and community service.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#mission" className="hover:text-primary transition">About Us</a></li>
                <li><a href="#services" className="hover:text-primary transition">Services</a></li>
                <li><a href="#recycling" className="hover:text-primary transition">Recycling</a></li>
                <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-primary transition">Document Shredding</a></li>
                <li><a href="#services" className="hover:text-primary transition">Material Pick-up</a></li>
                <li><a href="#recycling" className="hover:text-primary transition">Recycling Center</a></li>
                <li><a href="#services" className="hover:text-primary transition">Thrift Store</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <p className="text-sm">659 Clinic Road<br />Hannibal, MO 63401</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm">
              © 2024 Two Rivers Industries, Inc. All rights reserved. | Empowering Our Community
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
