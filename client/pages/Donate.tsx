import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Gift, Users, MapPin, Phone } from "lucide-react";

export default function Donate() {
  const [donationType, setDonationType] = useState<"monetary" | "items">("monetary");
  const [amount, setAmount] = useState("");

  const donationItems = [
    "Furniture (chairs, tables, dressers, etc.)",
    "Kitchen items (pots, pans, dishes, etc.)",
    "Clothing and shoes",
    "Books and media",
    "Electronics (working condition)",
    "Household appliances",
    "Tools and equipment",
    "Sports and recreation items",
    "Toys and games",
    "Decorative items",
  ];

  const donationAmounts = [
    { amount: 25, impact: "Provides 1 hour of employment support and training" },
    { amount: 50, impact: "Supports a week of meaningful work activities" },
    { amount: 100, impact: "Funds materials and equipment for our programs" },
    { amount: 250, impact: "Provides job coaching and skill development for one employee" },
    { amount: 500, impact: "Supports our recycling center operations for a month" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
              2R
            </div>
            <span className="font-bold text-lg hidden sm:inline">Two Rivers Industries</span>
          </Link>
          <Link to="/" className="text-gray-700 hover:text-primary transition">
            ← Back to Home
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-green-400 to-gray-600 py-16 sm:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Heart size={48} className="fill-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Make a Difference</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-95">
            Your support helps us provide meaningful employment and services to our community. Every donation matters.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Donation Type Selection */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">How Would You Like to Help?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <button
                onClick={() => setDonationType("monetary")}
                className={`p-6 rounded-lg border-2 transition text-left ${
                  donationType === "monetary"
                    ? "border-primary bg-primary bg-opacity-5"
                    : "border-gray-200 hover:border-primary"
                }`}
              >
                <Gift className={`mb-3 ${donationType === "monetary" ? "text-primary" : "text-gray-400"}`} size={28} />
                <h3 className="font-bold text-lg text-gray-900">Monetary Donation</h3>
                <p className="text-gray-600 text-sm">Give financially to support our mission</p>
              </button>

              <button
                onClick={() => setDonationType("items")}
                className={`p-6 rounded-lg border-2 transition text-left ${
                  donationType === "items"
                    ? "border-secondary bg-secondary bg-opacity-5"
                    : "border-gray-200 hover:border-secondary"
                }`}
              >
                <Heart className={`mb-3 ${donationType === "items" ? "text-secondary" : "text-gray-400"}`} size={28} />
                <h3 className="font-bold text-lg text-gray-900">Donate Items</h3>
                <p className="text-gray-600 text-sm">Contribute physical items we can use or resell</p>
              </button>
            </div>
          </div>

          {/* Monetary Donation */}
          {donationType === "monetary" && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-12">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Make Your Impact</h3>
              
              <div className="grid grid-cols-1 gap-4 mb-12">
                {donationAmounts.map((item) => (
                  <button
                    key={item.amount}
                    onClick={() => setAmount(item.amount.toString())}
                    className={`p-6 rounded-lg border-2 transition text-left ${
                      amount === item.amount.toString()
                        ? "border-primary bg-primary bg-opacity-5"
                        : "border-gray-200 hover:border-primary"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-2xl font-bold text-primary mb-2">${item.amount}</p>
                        <p className="text-gray-700 font-medium">{item.impact}</p>
                      </div>
                      <input
                        type="radio"
                        name="amount"
                        value={item.amount}
                        checked={amount === item.amount.toString()}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-5 h-5 text-primary cursor-pointer mt-1"
                      />
                    </div>
                  </button>
                ))}
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Or enter a custom amount</label>
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <span className="absolute left-4 top-3 text-gray-500 text-lg">$</span>
                    <input
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-green-600 rounded-lg p-8 text-white mb-8">
                <p className="mb-6 text-lg">
                  Your donation of <span className="font-bold text-2xl">{amount ? `$${amount}` : "$0"}</span> will directly support:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-xl">✓</span>
                    <span>Meaningful employment opportunities for people with disabilities</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-xl">✓</span>
                    <span>Job training and skill development programs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-xl">✓</span>
                    <span>Community recycling and thrift store services</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-xl">✓</span>
                    <span>Supervision and support from dedicated staff</span>
                  </li>
                </ul>
              </div>

              <button
                disabled={!amount || parseFloat(amount) <= 0}
                className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Donate ${amount || "0"} Now
              </button>
              
              <p className="text-center text-gray-600 text-sm mt-6">
                We accept donations via credit card, debit card, and bank transfer. Your donation is secure and tax-deductible.
              </p>
            </div>
          )}

          {/* Item Donation */}
          {donationType === "items" && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Items We Accept</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {donationItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border-l-4 border-secondary p-6 rounded mb-8">
                <p className="text-gray-900 font-semibold mb-3">
                  Do you have something not on this list?
                </p>
                <p className="text-gray-700 mb-4">
                  Please call us before dropping off items not listed above. We want to make sure we can properly accept and use your donation.
                </p>
                <a href="tel:573-221-3211" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                  <Phone size={20} />
                  Call 573-221-3211
                </a>
              </div>

              <div className="bg-gradient-to-r from-gray-500 to-gray-700 rounded-lg p-8 text-white mb-8">
                <h4 className="text-xl font-bold mb-4">How to Donate Items</h4>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="font-bold text-2xl flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white bg-opacity-20 rounded-full">1</span>
                    <span>Call us at 573-221-3211 to let us know what you have</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-2xl flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white bg-opacity-20 rounded-full">2</span>
                    <span>Arrange a convenient drop-off time at our location</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-2xl flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white bg-opacity-20 rounded-full">3</span>
                    <span>Visit us at 659 Clinic Road, Hannibal, MO 63401</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-2xl flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white bg-opacity-20 rounded-full">4</span>
                    <span>Our team will help unload and process your donation</span>
                  </li>
                </ol>
              </div>

              <button className="w-full bg-gray-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-gray-700 transition">
                Call to Arrange Drop-Off
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Your Support Matters */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 text-center">Why Your Support Matters</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary to-green-600 rounded-xl p-8 text-white">
              <Users size={40} className="mb-4" />
              <h3 className="text-xl font-bold mb-3">Employment Opportunities</h3>
              <p>
                Your donations create meaningful jobs for people with disabilities, providing stable income and dignity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl p-8 text-white">
              <Gift size={40} className="mb-4" />
              <h3 className="text-xl font-bold mb-3">Community Services</h3>
              <p>
                Support our recycling programs, thrift store, and document shredding services that benefit the entire community.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-8 text-white">
              <Heart size={40} className="mb-4" />
              <h3 className="text-xl font-bold mb-3">Life-Changing Impact</h3>
              <p>
                Every dollar helps build self-esteem, develop skills, and create a sense of belonging and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Questions?</h2>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
            <div className="flex justify-center mb-6">
              <Phone className="text-primary" size={40} />
            </div>
            <p className="text-xl font-bold text-primary mb-2">573-221-3211</p>
            <p className="text-gray-700 mb-6">
              Call us with any questions about donations, our mission, or how you can help
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-sm text-gray-600">
                <strong>Address:</strong> 659 Clinic Road, Hannibal, MO 63401
              </p>
            </div>

            <p className="text-gray-600">
              All donations are tax-deductible. We'll provide you with a receipt for your records.
            </p>
          </div>

          <Link to="/" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition">
            Back to Home
          </Link>
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
                <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
                <li><Link to="/" className="hover:text-primary transition">About Us</Link></li>
                <li><Link to="/" className="hover:text-primary transition">Services</Link></li>
                <li><Link to="/donate" className="hover:text-primary transition">Donate</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>659 Clinic Road</li>
                <li>Hannibal, MO 63401</li>
                <li className="mt-3">
                  <a href="tel:573-221-3211" className="hover:text-primary transition">
                    573-221-3211
                  </a>
                </li>
              </ul>
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
