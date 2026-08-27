import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Globe, TrendingUp, Sliders, BarChart3, Headphones, Rocket, Hotel, Utensils, Car, Compass, Anchor, Bus, Mail } from "lucide-react";
import { useSiteConfig } from "../context/SiteConfigContext";
import { BUSINESS_BENEFITS, PARTNER_TYPES, ONBOARDING_STEPS } from "../utils/constants";

export const BusinessesPage: React.FC = () => {
  const config = useSiteConfig();
  return (
    <div className="bg-[#f9f7f4] min-h-screen text-[#191816] pt-8 pb-20">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eae3d9] text-[#191816] text-xs font-bold uppercase tracking-wider mb-6">
          <span>FOR BUSINESS PARTNERS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1]">
          GROW YOUR BUSINESS <br />
          <span className="text-[#c47c2b]">WITH US.</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#5e5950] max-w-2xl mx-auto leading-relaxed">
          Join DigitalSafari's expanding ecosystem. Reach thousands of active travelers looking for services like yours—present and future.
        </p>

        {/* Business Category Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {["Hotels", "Restaurants", "Operators", "Transport"].map((tag, idx) => (
            <span key={idx} className="px-4 py-1.5 rounded-full bg-[#eae3d9]/70 text-[#191816] text-xs font-semibold">
              {tag}
            </span>
          ))}
        </div>

        {/* Hero CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/partner-registration"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c47c2b] hover:bg-[#b06d20] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-sm transition-all transform hover:-translate-y-0.5"
          >
            Become a Partner
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#191816] hover:bg-[#191816] hover:text-white text-[#191816] text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* Section 2: BUILT FOR YOUR BUSINESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#e6dfd5]">
        <div className="text-center space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#5e5950]">WHY JOIN US</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            BUILT FOR <br />
            <span className="text-[#c47c2b]">YOUR BUSINESS.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5e5950] max-w-xl mx-auto">
            DigitalSafari provides the tools to business owners to scale and reach more customers than ever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_BENEFITS.map((b, idx) => {
            return (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-[#e6dfd5] card-hover-effect space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f4efe8] flex items-center justify-center text-[#c47c2b]">
                  {idx === 0 && <Globe className="w-6 h-6" />}
                  {idx === 1 && <TrendingUp className="w-6 h-6" />}
                  {idx === 2 && <Sliders className="w-6 h-6" />}
                  {idx === 3 && <BarChart3 className="w-6 h-6" />}
                  {idx === 4 && <Headphones className="w-6 h-6" />}
                  {idx === 5 && <Rocket className="w-6 h-6" />}
                </div>

                <h3 className="text-lg font-bold text-[#191816]">{b.title}</h3>
                <p className="text-xs sm:text-sm text-[#5e5950] leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3: ANY HOSPITALITY BUSINESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#e6dfd5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#5e5950]">WHO CAN JOIN</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              ANY <br />
              HOSPITALITY <br />
              <span className="text-[#c47c2b]">BUSINESS.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#5e5950] leading-relaxed">
              If you operate in travel or hospitality in Kenya, DigitalSafari is built for you. From small boutique lodges to transport fleets and local guides.
            </p>

            <div className="bg-[#f4efe8] p-5 rounded-2xl border border-[#e6dfd5]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#191816] mb-2">Suitable for any size business:</h4>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#5e5950]">
                <span className="bg-white px-3 py-1 rounded-full border border-[#e6dfd5]">Refined</span>
                <span className="bg-white px-3 py-1 rounded-full border border-[#e6dfd5]">Standard</span>
                <span className="bg-white px-3 py-1 rounded-full border border-[#e6dfd5]">Premium</span>
                <span className="bg-white px-3 py-1 rounded-full border border-[#e6dfd5]">Deluxe</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PARTNER_TYPES.map((pt, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#e6dfd5] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#f4efe8] flex items-center justify-center text-[#c47c2b] shrink-0">
                  {idx === 0 && <Hotel className="w-5 h-5" />}
                  {idx === 1 && <Utensils className="w-5 h-5" />}
                  {idx === 2 && <Car className="w-5 h-5" />}
                  {idx === 3 && <Compass className="w-5 h-5" />}
                  {idx === 4 && <Anchor className="w-5 h-5" />}
                  {idx === 5 && <Bus className="w-5 h-5" />}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#191816]">{pt.title}</h4>
                  <p className="text-xs text-[#5e5950] mt-1 leading-relaxed">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 4: SIMPLE TO GET STARTED */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#e6dfd5]">
        <div className="text-center space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#5e5950]">PARTNERSHIP PROCESS</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            SIMPLE TO <br />
            <span className="text-[#c47c2b]">GET STARTED.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ONBOARDING_STEPS.map((s, idx) => (
            <div key={idx} className="bg-[#f4efe8] p-8 rounded-3xl border border-[#e6dfd5] space-y-4 relative">
              <span className="text-4xl font-extrabold text-[#d6cbbe] font-mono">{s.step}</span>
              <h3 className="text-lg font-bold text-[#191816]">{s.title}</h3>
              <p className="text-xs sm:text-sm text-[#5e5950] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: START GROWING TODAY Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-gradient-to-b from-[#eae3d9] to-[#f4efe8] rounded-3xl p-10 sm:p-16 text-center border border-[#e6dfd5] shadow-sm space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c47c2b]">REGISTER YOUR BUSINESS</span>

          <h2 className="text-3xl sm:text-6xl font-extrabold tracking-tight text-[#191816]">
            START GROWING <br />
            <span className="text-[#c47c2b]">TODAY.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5e5950] max-w-xl mx-auto leading-relaxed">
            DigitalSafari is building the future of connected travel in Kenya. Join our growing network today.
          </p>

          <div>
            <Link
              to="/partner-registration"
              className="inline-flex items-center justify-center gap-2 bg-[#c47c2b] hover:bg-[#b06d20] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              Become a DigitalSafari Partner
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-2 text-xs text-[#5e5950] flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 text-[#c47c2b]" />
            <span>Questions? Contact our partner support team at</span>
            <a href={config?.support_email ? `mailto:${config.support_email}` : undefined} className="font-semibold text-[#191816] underline">
              {config?.support_email || "Contact support"}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
