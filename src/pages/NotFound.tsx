
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-eonverse-100 px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-white mb-8 shadow-sm">
          <div className="text-4xl font-bold">404</div>
        </div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-eonverse-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className={cn(
            "inline-flex items-center px-6 py-3 bg-eonverse-900 text-white rounded-md font-medium",
            "transition-all duration-300 hover:bg-eonverse-800"
          )}
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
