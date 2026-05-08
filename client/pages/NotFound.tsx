import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</p>
        <p className="text-lg text-gray-600 mb-8">
          We couldn't find the page you're looking for. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition">
            Return Home
          </Link>
          <Link to="/donate" className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition">
            Support Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
