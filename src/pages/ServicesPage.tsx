import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Bed, Utensils, Car, Compass, ShieldCheck, MapPin } from "lucide-react";
import { useSiteConfig } from "../context/SiteConfigContext";
import { SERVICES_DATA } from "../utils/constants";

export const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const config = useSiteConfig();
  const customerUrl = config?.app_links.customer?.replace(/\/$/, "");

  const scrollToSection = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#f9f7f4] min-h-screen text-[#191816] pt-8 pb-20">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eae3d9] text-[#191816] text-xs font-bold uppercase tracking-wider mb-6">
          <span>PLATFORM SERVICES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1]">
          Everything your <br className="hidden sm:inline" />
          <span className="text-[#c47c2b]">journey needs.</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#5e5950] max-w-2xl mx-auto leading-relaxed">
          DigitalSafari connects your core travel components together—giving travelers and visitors a seamless accommodation, food, transport, and experience searching and booking ecosystem.
        </p>

        {/* Category Pills Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
              activeCategory === "all"
                ? "bg-[#191816] text-white border-[#191816] shadow-sm"
                : "bg-white text-[#5e5950] border-[#e6dfd5] hover:border-[#191816]"
            }`}
          >
            All Services
          </button>
          {SERVICES_DATA.map((srv) => (
            <button
              key={srv.id}
              onClick={() => scrollToSection(srv.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                activeCategory === srv.id
                  ? "bg-[#191816] text-white border-[#191816] shadow-sm"
                  : "bg-white text-[#5e5950] border-[#e6dfd5] hover:border-[#191816]"
              }`}
            >
              {srv.badge}
            </button>
          ))}
        </div>
      </section>

      {/* Services List Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pt-8">

        {/* 01 ACCOMMODATION */}
        <section id="accommodation" className="scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#5e5950]">
                <span>01</span>
                <span>/</span>
                <span>ACCOMMODATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Find your perfect <br />
                <span className="text-[#c47c2b]">place to stay.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#5e5950] leading-relaxed">
                Explore accommodation options across Kenya—from hotels to BnBs and lodges—and book through our seamless platform. Filter easily by destination, dates, and amenities.
              </p>

              {/* Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {["Hotels", "BnBs", "Apartments", "Lodges", "Guest Houses", "Vacation Homes"].map((pill, i) => (
                  <span key={i} className="px-3.5 py-1 rounded-full bg-[#eae3d9]/70 text-[#191816] text-xs font-medium">
                    {pill}
                  </span>
                ))}
              </div>

              {/* Feature Box */}
              <div className="bg-[#f4efe8] p-6 rounded-2xl border border-[#e6dfd5] space-y-3.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#191816]">What users can do:</h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#5e5950]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b] shrink-0 mt-0.5" />
                    <span>Explore accommodation options directly from your smartphone.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b] shrink-0 mt-0.5" />
                    <span>Filter easily by destination, dates, and amenities.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b] shrink-0 mt-0.5" />
                    <span>Save favorite options and compare side by side.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b] shrink-0 mt-0.5" />
                    <span>Manage bookings directly through the customer app.</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href={customerUrl || "/get-started"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#c47c2b] hover:bg-[#b06d20] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-sm hover:shadow transition-all"
                >
                  EXPLORE ACCOMMODATION
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Card Graphic */}
            <div className="lg:col-span-6">
              <div className="bg-white p-8 rounded-3xl border border-[#e6dfd5] shadow-sm relative overflow-hidden group">
                <div className="h-72 sm:h-80 bg-gradient-to-br from-[#eae3d9] to-[#f4efe8] rounded-2xl flex flex-col justify-between p-6 relative">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#191816] text-xs font-bold shadow-xs">
                      <Bed className="w-4 h-4 text-[#c47c2b]" />
                      ACCOMMODATION
                    </span>
                    <span className="text-xs font-bold text-[#c47c2b] bg-white/80 px-3 py-1 rounded-full">
                      60+ Stays Listed
                    </span>
                  </div>

                  <div className="space-y-2 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white shadow-xs">
                    <div className="flex items-center justify-between text-xs font-bold text-[#191816]">
                      <span>Lake Naivasha Resort & Lodges</span>
                      <span className="text-[#c47c2b]">Verified</span>
                    </div>
                    <p className="text-[11px] text-[#5e5950]">Naivasha • Luxury Cottages • Free Wifi • Lake View</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-[#5e5950] px-2">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#c47c2b]" /> Naivasha, Nakuru, Nairobi, Mombasa</span>
                  <span className="font-semibold text-[#191816]">DigitalSafari Partner</span>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* 02 FOOD & DINING */}
        <section id="food" className="scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Card Graphic (Reversed layout) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="bg-white p-8 rounded-3xl border border-[#e6dfd5] shadow-sm relative overflow-hidden">
                <div className="h-72 sm:h-80 bg-gradient-to-br from-[#f4efe8] to-[#eae3d9] rounded-2xl flex flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#191816] text-xs font-bold shadow-xs">
                      <Utensils className="w-4 h-4 text-[#c47c2b]" />
                      FOOD & DINING
                    </span>
                    <span className="text-xs font-bold text-[#c47c2b] bg-white/80 px-3 py-1 rounded-full">
                      45+ Restaurants
                    </span>
                  </div>

                  <div className="space-y-2 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white shadow-xs">
                    <div className="flex items-center justify-between text-xs font-bold text-[#191816]">
                      <span>Swahili Coast & Grill House</span>
                      <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded">Open Now</span>
                    </div>
                    <p className="text-[11px] text-[#5e5950]">Local Delicacies • Takeout & Delivery • Realtime Tracking</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-[#5e5950] px-2">
                  <span>Fast Delivery & Dine-In Reservations</span>
                  <span className="font-semibold text-[#191816]">Live Menus</span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#5e5950]">
                <span>02</span>
                <span>/</span>
                <span>FOOD & DINING</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Discover food <br />
                <span className="text-[#c47c2b]">wherever you are.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#5e5950] leading-relaxed">
                Discover restaurants, menus, and meals and order food ordering options directly through the DigitalSafari platform.
              </p>

              {/* Feature Box */}
              <div className="bg-[#f4efe8] p-6 rounded-2xl border border-[#e6dfd5] space-y-3.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#191816]">What users can do:</h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#5e5950]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b] shrink-0 mt-0.5" />
                    <span>Browse menus and order from top local restaurants</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b] shrink-0 mt-0.5" />
                    <span>Choose takeout or delivery options</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b] shrink-0 mt-0.5" />
                    <span>Pay directly through DigitalSafari platform</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b] shrink-0 mt-0.5" />
                    <span>Track food orders in real time</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href={customerUrl ? `${customerUrl}/food` : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#c47c2b] hover:bg-[#b06d20] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-sm hover:shadow transition-all"
                >
                  EXPLORE FOOD & DINING
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </section>


        {/* 03 TRANSPORTATION */}
        <section id="transport" className="scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#5e5950]">
                <span>03</span>
                <span>/</span>
                <span>TRANSPORTATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Get there without <br />
                <span className="text-[#c47c2b]">the hassle.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#5e5950] leading-relaxed">
                Connect with our operators to make your journey from start to finish easy—find taxis, shuttles, and transportation services all in one DigitalSafari console.
              </p>

              {/* Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {["Taxis", "Shuttles", "Car Hire", "Airport Transfers"].map((pill, i) => (
                  <span key={i} className="px-3.5 py-1 rounded-full bg-[#eae3d9]/70 text-[#191816] text-xs font-medium">
                    {pill}
                  </span>
                ))}
              </div>

              {/* Feature Box */}
              <div className="bg-[#f4efe8] p-6 rounded-2xl border border-[#e6dfd5] space-y-3.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#191816]">What users can do:</h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#5e5950]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b] shrink-0 mt-0.5" />
                    <span>Find transportation options wherever you choose</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b] shrink-0 mt-0.5" />
                    <span>Connect with verified providers in right destination</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b] shrink-0 mt-0.5" />
                    <span>Multiple vehicle and transit options available</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b] shrink-0 mt-0.5" />
                    <span>Manage transport booking through the customer app</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href={customerUrl ? `${customerUrl}/transport` : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#c47c2b] hover:bg-[#b06d20] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-sm hover:shadow transition-all"
                >
                  EXPLORE TRANSPORT
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Card Graphic */}
            <div className="lg:col-span-6">
              <div className="bg-white p-8 rounded-3xl border border-[#e6dfd5] shadow-sm relative overflow-hidden">
                <div className="h-72 sm:h-80 bg-gradient-to-br from-[#eae3d9] to-[#f4efe8] rounded-2xl flex flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#191816] text-xs font-bold shadow-xs">
                      <Car className="w-4 h-4 text-[#c47c2b]" />
                      TRANSPORTATION
                    </span>
                    <span className="text-xs font-bold text-[#c47c2b] bg-white/80 px-3 py-1 rounded-full">
                      40+ Drivers & Operators
                    </span>
                  </div>

                  <div className="space-y-2 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white shadow-xs">
                    <div className="flex items-center justify-between text-xs font-bold text-[#191816]">
                      <span>Rift Valley Express Shuttles</span>
                      <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Verified Driver</span>
                    </div>
                    <p className="text-[11px] text-[#5e5950]">Nairobi ➔ Naivasha ➔ Nakuru • 4WD Safari Landcruisers & Vans</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-[#5e5950] px-2">
                  <span>Point-to-Point & Safari Rentals</span>
                  <span className="font-semibold text-[#191816]">Direct Dispatch</span>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* 04 EXPERIENCES */}
        <section id="experiences" className="scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Card Graphic (Reversed layout) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="bg-white p-8 rounded-3xl border border-[#e6dfd5] shadow-sm relative overflow-hidden">
                <div className="h-72 sm:h-80 bg-gradient-to-br from-[#f4efe8] to-[#eae3d9] rounded-2xl flex flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#191816] text-xs font-bold shadow-xs">
                      <Compass className="w-4 h-4 text-[#c47c2b]" />
                      EXPERIENCES
                    </span>
                    <span className="text-xs font-bold text-[#c47c2b] bg-white/80 px-3 py-1 rounded-full">
                      25+ Excursions
                    </span>
                  </div>

                  <div className="space-y-2 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white shadow-xs">
                    <div className="flex items-center justify-between text-xs font-bold text-[#191816]">
                      <span>Hell's Gate & Boat Safari Excursion</span>
                      <span className="text-xs text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Top Rated</span>
                    </div>
                    <p className="text-[11px] text-[#5e5950]">Guided Cycling • Hippo Spotting • Geothermal Spa Access</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-[#5e5950] px-2">
                  <span>Certified Local Guides</span>
                  <span className="font-semibold text-[#191816]">Authentic Tours</span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#5e5950]">
                <span>04</span>
                <span>/</span>
                <span>EXPERIENCES</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Discover what <br />
                <span className="text-[#c47c2b]">Kenya has to offer.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#5e5950] leading-relaxed">
                DigitalSafari connects travelers with guided tours, excursions, and nature experiences directly from local tour operators and experienced guides through our platform.
              </p>

              {/* Special Highlight Box */}
              <div className="bg-[#e6dfd5]/40 border border-[#c47c2b]/30 p-4 rounded-xl flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#c47c2b] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-[#191816] uppercase tracking-wide">Guiding Company</h5>
                  <p className="text-xs text-[#5e5950] mt-0.5">Explore destination tours and nature experiences directly from local tour operators and experienced guides through our platform.</p>
                </div>
              </div>

              {/* Feature Box */}
              <div className="bg-[#f4efe8] p-6 rounded-2xl border border-[#e6dfd5] space-y-3.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#191816]">What users can do:</h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#5e5950]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b] shrink-0 mt-0.5" />
                    <span>Guided safari experiences</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b] shrink-0 mt-0.5" />
                    <span>Local activities & tour booking</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b] shrink-0 mt-0.5" />
                    <span>Cultural events and tours</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c47c2b] shrink-0 mt-0.5" />
                    <span>Unforgettable destination spots</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href={customerUrl ? `${customerUrl}/experiences` : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#c47c2b] hover:bg-[#b06d20] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-sm hover:shadow transition-all"
                >
                  EXPLORE EXPERIENCES
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </section>

      </div>


      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
        <div className="bg-gradient-to-b from-[#eae3d9] to-[#f4efe8] rounded-3xl p-10 sm:p-16 text-center border border-[#e6dfd5] shadow-sm space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#191816]">
            Ready to experience <br />
            <span className="text-[#c47c2b]">DigitalSafari?</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5e5950] max-w-xl mx-auto leading-relaxed">
            Join the connected travel revolution across Kenya. Explore our connected platform — whether you're planning a trip or expanding your business today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={config?.app_links.customer || "/get-started"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c47c2b] hover:bg-[#b06d20] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-sm transition-all"
            >
              START YOUR JOURNEY
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={config?.app_links.partner_landing || config?.app_links.transport_partner || "/businesses"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#191816] hover:bg-[#191816] hover:text-white text-[#191816] text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all"
            >
              BECOME A PARTNER
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
