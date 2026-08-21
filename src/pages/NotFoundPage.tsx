import React from "react";
import { Link } from "react-router-dom";
import { Compass, Home } from "lucide-react";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-[#f9f7f4] min-h-[80vh] flex items-center justify-center text-center px-4 py-20">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#eae3d9] mx-auto flex items-center justify-center text-[#c47c2b]">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: "12s" }} />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-[#c47c2b]">404 — PAGE NOT FOUND</span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#191816]">
          Looks like you've wandered off the trail.
        </h1>

        <p className="text-xs sm:text-sm text-[#5e5950] leading-relaxed">
          The page or safari destination you are looking for doesn't exist or has moved.
        </p>

        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#c47c2b] hover:bg-[#b06d20] text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-full shadow-sm transition-all"
          >
            <Home className="w-4 h-4" />
            Return to DigitalSafari
          </Link>
        </div>
      </div>
    </div>
  );
};
