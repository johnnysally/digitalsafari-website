import React from "react";
import { ArrowUpRight, Compass, Building2, UserCheck, CheckCircle2 } from "lucide-react";
import { LINKS } from "../utils/links";

export const GetStartedPage: React.FC = () => {
  return (
    <div className="bg-[#f9f7f4] min-h-screen text-[#191816] pt-8 pb-20 flex flex-col justify-center">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eae3d9] text-[#191816] text-xs font-bold uppercase tracking-wider mb-6">
          <span>CHOOSE YOUR DESTINATION</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto leading-[1.1]">
          Welcome to <br />
          <span className="text-[#c47c2b]">DigitalSafari.</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#5e5950] max-w-xl mx-auto leading-relaxed">
          Please select your path to enter the appropriate DigitalSafari application.
        </p>
      </section>

      {/* Two Routing Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Traveler Path */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#e6dfd5] shadow-sm flex flex-col justify-between space-y-6 card-hover-effect">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#f4efe8] flex items-center justify-center text-[#c47c2b]">
                <UserCheck className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#c47c2b]">FOR TRAVELERS & VISITORS</span>
                <h3 className="text-2xl font-extrabold text-[#191816] mt-1">I'm a Traveler</h3>
              </div>

              <p className="text-xs sm:text-sm text-[#5e5950] leading-relaxed">
                Discover stays, food menus, transport options, and safari tours across Kenya on our customer platform.
              </p>

              <ul className="space-y-2 text-xs text-[#5e5950] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c47c2b]" />
                  <span>Browse 60+ verified hotels and BnBs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c47c2b]" />
                  <span>Order food delivery from local restaurants</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c47c2b]" />
                  <span>Book verified local transport and guides</span>
                </li>
              </ul>
            </div>

            <div>
              <a
                href={LINKS.START_JOURNEY}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#c47c2b] hover:bg-[#b06d20] text-white text-xs font-bold uppercase tracking-wider py-4 rounded-full shadow-sm transition-all"
              >
                Start Your Journey
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Partner Path */}
          <div className="bg-[#191816] text-white p-8 sm:p-10 rounded-3xl border border-[#2a2825] shadow-sm flex flex-col justify-between space-y-6 card-hover-effect">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#2a2825] flex items-center justify-center text-[#c47c2b]">
                <Building2 className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#c47c2b]">FOR HOSPITALITY BUSINESSES</span>
                <h3 className="text-2xl font-extrabold text-white mt-1">I'm a Business Owner</h3>
              </div>

              <p className="text-xs sm:text-sm text-[#9e978e] leading-relaxed">
                Register your hotel, BnB, restaurant, transport fleet, or tour guide service to manage bookings & grow.
              </p>

              <ul className="space-y-2 text-xs text-[#9e978e] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c47c2b]" />
                  <span>Reach thousands of active travelers in Kenya</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c47c2b]" />
                  <span>Access booking, inventory, & menu management tools</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c47c2b]" />
                  <span>Receive automated payouts & revenue analytics</span>
                </li>
              </ul>
            </div>

            <div>
              <a
                href={LINKS.BECOME_PARTNER}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#c47c2b] hover:bg-[#b06d20] text-white text-xs font-bold uppercase tracking-wider py-4 rounded-full shadow-sm transition-all"
              >
                Become a Partner
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
