import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Bed, Utensils, Car, Compass, ShieldCheck, CheckCircle2, Building2, Users } from "lucide-react";
import { useSiteConfig } from "../context/SiteConfigContext";

export const HomePage: React.FC = () => {
  const config = useSiteConfig();
  const partnerUrl = config?.app_links.partner_landing || config?.app_links.transport_partner;
  return (
    <div className="bg-[#f9f7f4] min-h-screen text-[#191816]">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden border-b border-[#e6dfd5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eae3d9] text-[#191816] text-xs font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4 text-[#c47c2b]" />
                <span>UNIFIED TRAVEL ECOSYSTEM</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                Your journey. <br />
                <span className="text-[#c47c2b]">One platform.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5e5950] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                DigitalSafari connects accommodation, food ordering, transportation, and local experiences into one seamless digital platform across Kenya.
              </p>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={config?.app_links.customer || "/get-started"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c47c2b] hover:bg-[#b06d20] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5"
                >
                  Start Your Journey
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={partnerUrl || "/businesses"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#191816] hover:bg-[#191816] hover:text-white text-[#191816] text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all"
                >
                  Become a Partner
                </a>
              </div>

              {/* Stats Bar */}
              <div className="pt-8 border-t border-[#e6dfd5] grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                <div>
                  <h4 className="text-2xl font-extrabold text-[#191816]">60+</h4>
                  <p className="text-xs text-[#5e5950]">Verified Stays</p>
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold text-[#191816]">45+</h4>
                  <p className="text-xs text-[#5e5950]">Restaurants</p>
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold text-[#191816]">40+</h4>
                  <p className="text-xs text-[#5e5950]">Transport Providers</p>
                </div>
              </div>

            </div>

            {/* Right Visual Graphic */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e6dfd5] shadow-sm space-y-4 relative">
                <div className="h-64 sm:h-72 bg-gradient-to-tr from-[#eae3d9] via-[#f4efe8] to-white rounded-2xl p-6 flex flex-col justify-between border border-[#e6dfd5]/60">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#c47c2b]">KENYA TRAVEL ECOSYSTEM</span>
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white/90 p-3 rounded-xl border border-white text-xs space-y-1">
                      <span className="font-bold text-[#191816]">1. Stay: Lake Naivasha Cottage</span>
                      <p className="text-[11px] text-[#5e5950]">Booked • Check-in Ready</p>
                    </div>
                    <div className="bg-white/90 p-3 rounded-xl border border-white text-xs space-y-1">
                      <span className="font-bold text-[#191816]">2. Food: Rift Valley Grill Lunch</span>
                      <p className="text-[11px] text-[#5e5950]">Confirmed • Delivery to Cottage</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#5e5950] px-2">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-[#c47c2b]" /> Verified Merchants</span>
                  <span className="font-semibold text-[#191816]">Unified Dashboard</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Problem & Solution Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c47c2b]">THE PROBLEM WE SOLVE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              No more juggling 5 different apps for one trip.
            </h2>
            <p className="text-sm sm:text-base text-[#5e5950] leading-relaxed">
              Travelers often have to use separate platforms for accommodation, food ordering, transport, and tour discovery. This creates unnecessary friction, lost bookings, and fragmented communication.
            </p>
            <p className="text-sm sm:text-base text-[#5e5950] leading-relaxed">
              DigitalSafari brings every piece of your journey together into one connected digital experience.
            </p>
          </div>

          <div className="bg-[#f4efe8] p-8 rounded-3xl border border-[#e6dfd5] space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#191816]">The Connected Journey Flow</h4>
            <div className="space-y-3 pt-2">
              {[
                { step: "Discover", desc: "Explore accommodation, meals, transport, and safari activities." },
                { step: "Choose", desc: "Compare options side-by-side with transparent pricing." },
                { step: "Book / Order", desc: "Complete transactions securely in one place." },
                { step: "Move & Experience", desc: "Access transport and guided tours easily." }
              ].map((s, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-[#e6dfd5] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#eae3d9] flex items-center justify-center font-mono text-xs font-bold text-[#c47c2b]">
                    0{idx + 1}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#191816]">{s.step}</h5>
                    <p className="text-[11px] text-[#5e5950]">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* Services Overview Cards Section */}
      <section className="py-20 bg-[#eae3d9]/40 border-y border-[#e6dfd5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c47c2b]">OUR PLATFORM SERVICES</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Four pillars of a perfect journey.
            </h2>
            <p className="text-sm sm:text-base text-[#5e5950] max-w-xl mx-auto">
              Whether you need a stay, a hot meal, a ride across town, or a safari guide, DigitalSafari has you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Accommodation */}
            <div className="bg-white p-6 rounded-3xl border border-[#e6dfd5] card-hover-effect space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f4efe8] flex items-center justify-center text-[#c47c2b]">
                  <Bed className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#191816]">Accommodation</h3>
                <p className="text-xs text-[#5e5950] leading-relaxed">
                  Hotels, BnBs, lodges, guest houses, and holiday apartments across Naivasha, Nakuru, and Nairobi.
                </p>
              </div>
              <Link to="/services" className="text-xs font-bold text-[#c47c2b] hover:text-[#b06d20] inline-flex items-center gap-1 pt-4 border-t border-[#f4efe8]">
                Explore Accommodation →
              </Link>
            </div>

            {/* Card 2: Food & Dining */}
            <div className="bg-white p-6 rounded-3xl border border-[#e6dfd5] card-hover-effect space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f4efe8] flex items-center justify-center text-[#c47c2b]">
                  <Utensils className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#191816]">Food & Dining</h3>
                <p className="text-xs text-[#5e5950] leading-relaxed">
                  Discover local menus, place food orders for delivery or takeout directly to your location.
                </p>
              </div>
              <Link to="/services" className="text-xs font-bold text-[#c47c2b] hover:text-[#b06d20] inline-flex items-center gap-1 pt-4 border-t border-[#f4efe8]">
                Explore Food & Dining →
              </Link>
            </div>

            {/* Card 3: Transport */}
            <div className="bg-white p-6 rounded-3xl border border-[#e6dfd5] card-hover-effect space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f4efe8] flex items-center justify-center text-[#c47c2b]">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#191816]">Transportation</h3>
                <p className="text-xs text-[#5e5950] leading-relaxed">
                  Local taxis, inter-city shuttles, car hire, and safari vehicle rentals with verified drivers.
                </p>
              </div>
              <Link to="/services" className="text-xs font-bold text-[#c47c2b] hover:text-[#b06d20] inline-flex items-center gap-1 pt-4 border-t border-[#f4efe8]">
                Explore Transportation →
              </Link>
            </div>

            {/* Card 4: Experiences */}
            <div className="bg-white p-6 rounded-3xl border border-[#e6dfd5] card-hover-effect space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f4efe8] flex items-center justify-center text-[#c47c2b]">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#191816]">Experiences</h3>
                <p className="text-xs text-[#5e5950] leading-relaxed">
                  Guided safari tours, boat rides, cultural excursions, and local destination packages.
                </p>
              </div>
              <Link to="/services" className="text-xs font-bold text-[#c47c2b] hover:text-[#b06d20] inline-flex items-center gap-1 pt-4 border-t border-[#f4efe8]">
                Explore Experiences →
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* For Businesses Callout Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#191816] text-white rounded-3xl p-10 sm:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c47c2b]">FOR HOSPITALITY MERCHANTS</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Are you a hotel, restaurant, or transport provider?
            </h2>
            <p className="text-sm sm:text-base text-[#9e978e] leading-relaxed max-w-2xl">
              Join DigitalSafari to digitize your operations, receive bookings and orders, and reach thousands of active travelers across Kenya.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              href={partnerUrl || "/businesses"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[#c47c2b] hover:bg-[#b06d20] text-white text-xs font-bold uppercase tracking-wider py-4 rounded-full shadow-sm transition-all"
            >
              Become a Partner
            </a>
            <Link
              to="/businesses"
              className="w-full text-center border border-[#3a3733] hover:border-white text-white text-xs font-bold uppercase tracking-wider py-4 rounded-full transition-all"
            >
              Learn Partner Benefits
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};
