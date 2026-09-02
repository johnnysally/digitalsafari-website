import React from "react";
import { ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useSiteConfig } from "../../context/SiteConfigContext";
import { LINKS } from "../../utils/links";

export const Hero: React.FC = () => {
  const config = useSiteConfig();
  const customerUrl = LINKS.getCustomerUrl(config);
  const partnerUrl = LINKS.getPartnerUrl(config);

  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden border-b border-[#e6dfd5]">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('/hero-bg.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 z-0" />
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>UNIFIED TRAVEL ECOSYSTEM</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
              Your journey. <br />
              <span className="text-[#f39c12]">One platform.</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              DigitalSafari connects accommodation, food ordering, transportation, and local experiences into one seamless digital platform across Kenya.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={customerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c47c2b] hover:bg-[#b06d20] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-lg shadow-black/40 hover:shadow-amber-900/30 transition-all transform hover:-translate-y-0.5"
              >
                Start Your Journey
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                to="/partner-registration"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/80 hover:bg-white hover:text-[#191816] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all backdrop-blur-sm"
              >
                Become a Partner
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="pt-8 border-t border-white/20 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white">60+</h4>
                <p className="text-xs text-gray-300 font-medium">Verified Stays</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white">45+</h4>
                <p className="text-xs text-gray-300 font-medium">Restaurants</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white">40+</h4>
                <p className="text-xs text-gray-300 font-medium">Transport Providers</p>
              </div>
            </div>

          </div>

          {/* Right Visual Graphic */}
          <div className="lg:col-span-5">
            <div className="bg-black/40 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl space-y-4 relative">
              <div className="h-64 sm:h-72 bg-gradient-to-tr from-black/60 via-black/40 to-white/10 rounded-2xl p-6 flex flex-col justify-between border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">KENYA TRAVEL ECOSYSTEM</span>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
                </div>

                <div className="space-y-3">
                  <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/15 text-xs space-y-1">
                    <span className="font-bold text-white">1. Stay: Lake Naivasha Cottage</span>
                    <p className="text-[11px] text-gray-300">Booked • Check-in Ready</p>
                  </div>
                  <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/15 text-xs space-y-1">
                    <span className="font-bold text-white">2. Food: Rift Valley Grill Lunch</span>
                    <p className="text-[11px] text-gray-300">Confirmed • Delivery to Cottage</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-300 px-2">
                <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-amber-400" /> Verified Merchants</span>
                <span className="font-semibold text-white">Unified Dashboard</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
