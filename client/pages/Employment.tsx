import { Link } from "react-router-dom";
import { FileText, CheckCircle, MapPin, Phone, Clock } from "lucide-react";

export default function Employment() {
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
      <section className="bg-gradient-to-br from-gray-500 to-gray-700 py-16 sm:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <FileText size={48} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Employment Opportunities</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-95">
            Join us and find meaningful, dignified work in a supportive community
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Info Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">About Our Employment Program</h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-8">
              <p>
                Two Rivers Industries is committed to providing meaningful employment to individuals with disabilities in Marion and Ralls County. Our program emphasizes the abilities of each person through stable, meaningful, and dignified employment opportunities.
              </p>
              <p>
                We provide comprehensive job training and supervision designed to increase skill levels and self-esteem for every employee. Join our community where your contributions are valued and your potential is recognized.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-primary bg-opacity-5 rounded-lg p-6 border border-primary border-opacity-20">
                <CheckCircle className="text-primary mb-3" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Meaningful Work</h3>
                <p className="text-gray-600 text-sm">Stable employment with purpose and dignity</p>
              </div>
              <div className="bg-secondary bg-opacity-5 rounded-lg p-6 border border-secondary border-opacity-20">
                <CheckCircle className="text-secondary mb-3" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Skill Development</h3>
                <p className="text-gray-600 text-sm">Training and coaching to grow your abilities</p>
              </div>
              <div className="bg-primary bg-opacity-5 rounded-lg p-6 border border-primary border-opacity-20">
                <CheckCircle className="text-primary mb-3" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Supportive Community</h3>
                <p className="text-gray-600 text-sm">Work in a caring, inclusive environment</p>
              </div>
            </div>
          </div>

          {/* Application Forms */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Employment Application */}
            <div className="bg-gradient-to-br from-primary to-green-600 rounded-xl p-8 text-white">
              <FileText size={40} className="mb-4" />
              <h3 className="text-2xl font-bold mb-4">Employment Application</h3>
              <p className="mb-6 text-lg">
                Ready to join our team? Download and complete the employment application form.
              </p>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold mb-3">Steps to Apply:</p>
                <ol className="space-y-2 text-sm">
                  <li>1. Download the application form</li>
                  <li>2. Print and complete all sections</li>
                  <li>3. Deliver to our location</li>
                  <li>4. We'll contact you soon!</li>
                </ol>
              </div>

              <button className="w-full bg-white text-primary font-bold py-3 rounded-lg hover:bg-gray-100 transition">
                Download Application Form
              </button>
            </div>

            {/* Employment Certification */}
            <div className="bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl p-8 text-white">
              <FileText size={40} className="mb-4" />
              <h3 className="text-2xl font-bold mb-4">Employment Certification</h3>
              <p className="mb-6 text-lg">
                For Persons with Disabilities - Required for employment eligibility verification.
              </p>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold mb-3">What You'll Need:</p>
                <ul className="space-y-2 text-sm">
                  <li>• Completed certification form</li>
                  <li>• Doctor's statement or evaluation</li>
                  <li>• Supporting documentation</li>
                  <li>• Return with your application</li>
                </ul>
              </div>

              <button className="w-full bg-white text-secondary font-bold py-3 rounded-lg hover:bg-gray-100 transition">
                Download Certification Form
              </button>
            </div>
          </div>

          {/* Submission Instructions */}
          <div className="bg-blue-50 border-l-4 border-secondary rounded-lg p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Where to Submit Your Forms</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <MapPin className="text-secondary flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Physical Address</p>
                  <p className="text-gray-700 text-sm">
                    659 Clinic Road<br />
                    Hannibal, MO 63401<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-secondary flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Contact Us</p>
                  <p className="text-gray-700 text-sm">
                    <a href="tel:573-221-3211" className="text-secondary hover:underline font-bold">
                      573-221-3211
                    </a>
                    <br />
                    Ask for employment info
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-secondary flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Hours</p>
                  <p className="text-gray-700 text-sm">
                    Monday - Friday<br />
                    Call for specific hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-12">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">What Happens Next?</h3>
            
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Submit Your Application",
                  description: "Print, complete, and deliver both the employment application and certification form to our office."
                },
                {
                  step: 2,
                  title: "Initial Review",
                  description: "Our team reviews your application and verifies your disability certification within 1-2 weeks."
                },
                {
                  step: 3,
                  title: "Interview & Assessment",
                  description: "We'll contact you to schedule a meeting where we can learn more about your skills and interests."
                },
                {
                  step: 4,
                  title: "Job Placement & Training",
                  description: "Once approved, we'll place you in a suitable position with thorough on-the-job training and support."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h3>
            
            <div className="space-y-6">
              {[
                {
                  q: "Do I need documentation of disability?",
                  a: "Yes, the Employment Certification form requires verification of disability status from a healthcare provider or relevant agency."
                },
                {
                  q: "What types of work are available?",
                  a: "We offer various positions including recycling center work, thrift store operations, document processing, and more based on individual abilities."
                },
                {
                  q: "How much will I be paid?",
                  a: "Compensation varies based on position and experience. We offer competitive wages and full support for our employees."
                },
                {
                  q: "Is transportation available?",
                  a: "Please call us at 573-221-3211 to discuss transportation options and accommodations for your situation."
                },
                {
                  q: "Can I work part-time or full-time?",
                  a: "Both options may be available. We'll work with you to find an arrangement that fits your needs and abilities."
                }
              ].map((item, i) => (
                <div key={i} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">{item.q}</h4>
                  <p className="text-gray-700">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-green-600 py-16 sm:py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-95">
            We're excited to welcome you to our community of hardworking, dedicated employees.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition mb-6">
            Download Application Forms
          </button>
          <p className="text-sm opacity-90">
            Questions? Call us at <a href="tel:573-221-3211" className="font-bold underline">573-221-3211</a>
          </p>
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
                <li><Link to="/employment" className="hover:text-primary transition">Employment</Link></li>
                <li><Link to="/donate" className="hover:text-primary transition">Donate</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>659 Clinic Road</li>
                <li>Hannibal, MO 63401</li>
                <li className="mt-3">
                  <a href="tel:573-221-3211" className="hover:text-primary transition font-bold">
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
