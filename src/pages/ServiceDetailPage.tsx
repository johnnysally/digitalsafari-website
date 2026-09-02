import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Bed, Utensils, Car, Compass, MapPin, ArrowLeft } from "lucide-react";
import { SERVICES_DATA } from "../utils/constants";
import { useSiteConfig } from "../context/SiteConfigContext";
import { LINKS } from "../utils/links";

export const ServiceDetailPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const service = SERVICES_DATA.find((s) => s.id === type) || SERVICES_DATA[0];
  const config = useSiteConfig();
  const appUrl = LINKS.getServiceUrl(config, service.id);

  return (
    <div className="bg-[#f9f7f4] min-h-screen text-[#191816] pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="pt-4 pb-6">
          <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5e5950] hover:text-[#191816]">
            <ArrowLeft className="w-4 h-4 text-[#c47c2b]" />
            Back to All Services
          </Link>
        </div>

        {/* Hero */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#e6dfd5] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eae3d9] text-[#191816] text-xs font-bold uppercase tracking-wider">
              <span>SERVICE MODULE {service.number}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {service.badge}: <br />
              <span className="text-[#c47c2b]">{service.title}</span>
            </h1>

            <p className="text-sm sm:text-base text-[#5e5950] leading-relaxed">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {service.pills.map((pill, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-[#f4efe8] text-xs font-semibold text-[#191816]">
                  {pill}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <a
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#c47c2b] hover:bg-[#b06d20] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-sm transition-all"
              >
                Launch {service.badge} App
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#f4efe8] p-8 rounded-2xl border border-[#e6dfd5] space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#191816]">Key Platform Capabilities</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#5e5950]">
              {service.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c47c2b] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-[#e6dfd5] flex items-center justify-between text-xs text-[#5e5950]">
              <span>Active Coverage:</span>
              <span className="font-bold text-[#191816]">{service.locations?.join(", ") || "Kenya"}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
