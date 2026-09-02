import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, UserCheck, Building2, CheckCircle2, ChevronRight } from "lucide-react";
import { useSiteConfig } from "../context/SiteConfigContext";
import { LINKS } from "../utils/links";

export const HowItWorksPage: React.FC = () => {
  const [journeyTab, setJourneyTab] = useState<"customer" | "business">("customer");
  const config = useSiteConfig();
  const customerUrl = LINKS.getCustomerUrl(config);
  const partnerUrl = LINKS.getPartnerUrl(config);

  const customerSteps = [
    { num: "01", title: "Visit DigitalSafari", desc: "Browse platform services on our website or mobile portal." },
    { num: "02", title: "Discover & Filter Services", desc: "Filter accommodation by destination, search restaurant menus, or check transport routes." },
    { num: "03", title: "Select Your Option", desc: "Compare side-by-side amenities, ratings, and transparent pricing." },
    { num: "04", title: "Open Customer App", desc: "Seamlessly transition to our live SaaS application to finalize your reservation or order." },
    { num: "05", title: "Book / Order & Pay", desc: "Complete secure payment via M-Pesa or card with instant confirmation." },
    { num: "06", title: "Manage & Enjoy", desc: "Access check-in details, real-time food tracking, and transport contact in your app." }
  ];

  const businessSteps = [
    { num: "01", title: "Apply to Join", desc: "Click 'Become a Partner' and submit basic business information in under 3 minutes." },
    { num: "02", title: "Verification & Documentation", desc: "Upload business verification details to ensure trust & safety." },
    { num: "03", title: "Complete Onboarding", desc: "Set up your digital profile, add photos, menu items, room inventory, or vehicle details." },
    { num: "04", title: "Publish & Go Live", desc: "Your business becomes immediately searchable by travelers across Kenya." },
    { num: "05", title: "Receive Bookings & Orders", desc: "Accept incoming customer requests directly on your partner console." },
    { num: "06", title: "Manage & Scale Revenue", desc: "Track sales analytics, customer reviews, and payout disbursements automatically." }
  ];

  return (
    <div className="bg-[#f9f7f4] min-h-screen text-[#191816] pt-8 pb-20">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eae3d9] text-[#191816] text-xs font-bold uppercase tracking-wider mb-6">
          <span>PLATFORM WORKFLOW</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1]">
          How DigitalSafari <br />
          <span className="text-[#c47c2b]">works for everyone.</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#5e5950] max-w-2xl mx-auto leading-relaxed">
          Whether you are exploring Kenya as a traveler or expanding your hospitality business as a partner, getting started takes just a few steps.
        </p>

        {/* Tab Toggle */}
        <div className="mt-10 inline-flex items-center bg-[#eae3d9] p-1.5 rounded-full border border-[#dcd3c7]">
          <button
            onClick={() => setJourneyTab("customer")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              journeyTab === "customer"
                ? "bg-[#191816] text-white shadow-sm"
                : "text-[#5e5950] hover:text-[#191816]"
            }`}
          >
            <UserCheck className="w-4 h-4" />
            Travelers Journey
          </button>
          <button
            onClick={() => setJourneyTab("business")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              journeyTab === "business"
                ? "bg-[#191816] text-white shadow-sm"
                : "text-[#5e5950] hover:text-[#191816]"
            }`}
          >
            <Building2 className="w-4 h-4" />
            Partners Journey
          </button>
        </div>
      </section>

      {/* Steps Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(journeyTab === "customer" ? customerSteps : businessSteps).map((step, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-[#e6dfd5] card-hover-effect space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-[#c47c2b] font-mono">{step.num}</span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#5e5950] bg-[#f4efe8] px-3 py-1 rounded-full">
                    Step {idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#191816] mt-4">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[#5e5950] mt-2 leading-relaxed">{step.desc}</p>
              </div>

              <div className="pt-4 border-t border-[#f4efe8] flex items-center gap-2 text-xs font-semibold text-[#191816]">
                <CheckCircle2 className="w-4 h-4 text-[#c47c2b]" />
                <span>{journeyTab === "customer" ? "Traveler Step" : "Partner Step"}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          {journeyTab === "customer" ? (
            <a
              href={customerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#c47c2b] hover:bg-[#b06d20] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-sm transition-all"
            >
              Start Exploring Now
              <ArrowUpRight className="w-4 h-4" />
            </a>
          ) : (
            <Link
              to="/partner-registration"
              className="inline-flex items-center gap-2 bg-[#c47c2b] hover:bg-[#b06d20] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-sm transition-all"
            >
              Register Your Business
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </section>

    </div>
  );
};
