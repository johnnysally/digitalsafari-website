import React from "react";
import { Compass, ShieldCheck, Heart, Sparkles, Target, Eye, MapPin, Users } from "lucide-react";
import { LINKS } from "../utils/links";

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#f9f7f4] min-h-screen text-[#191816] pt-8 pb-20">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eae3d9] text-[#191816] text-xs font-bold uppercase tracking-wider mb-6">
          <span>OUR STORY & VISION</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1]">
          Connecting African travel <br />
          <span className="text-[#c47c2b]">through technology.</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#5e5950] max-w-2xl mx-auto leading-relaxed">
          DigitalSafari was built to solve the fragmentation of travel, accommodation, food, and transport services across Kenya and the broader continent.
        </p>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#e6dfd5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c47c2b]">WHY WE EXIST</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Bridging the gap between travelers and hospitality businesses.
            </h2>
            <p className="text-sm sm:text-base text-[#5e5950] leading-relaxed">
              Every day, thousands of visitors journey across Kenya—from Naivasha's lakesides to Nakuru's parks and Nairobi's urban hubs. Yet, finding reliable stays, arranging meals, and securing trusted local transport often requires managing dozens of disconnected channels.
            </p>
            <p className="text-sm sm:text-base text-[#5e5950] leading-relaxed">
              DigitalSafari serves as the official digital bridge. We empower local hotels, BnBs, restaurants, and transport operators with modern technology while offering travelers a single, trusted ecosystem for their journey.
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#f4efe8] p-8 rounded-3xl border border-[#e6dfd5] space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#c47c2b] shrink-0 border border-[#e6dfd5]">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#191816]">Our Mission</h3>
                <p className="text-xs sm:text-sm text-[#5e5950] mt-1 leading-relaxed">
                  To make travel and hospitality services easier to discover, access, and connect through intelligent, localized digital technology.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-4 border-t border-[#e6dfd5]">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#c47c2b] shrink-0 border border-[#e6dfd5]">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#191816]">Our Vision</h3>
                <p className="text-xs sm:text-sm text-[#5e5950] mt-1 leading-relaxed">
                  To build a unified digital ecosystem for travel, hospitality, and local commerce across Kenya and expanded African regions.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#e6dfd5]">
        <div className="text-center space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c47c2b]">WHAT GUIDES US</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Customer First", desc: "We prioritize clarity, safety, and seamless experience for every traveler.", icon: Heart },
            { title: "Innovation", desc: "Leveraging modern technology to digitize traditional African travel flows.", icon: Sparkles },
            { title: "Trust & Transparency", desc: "Verifying all partner listings and maintaining honest, upfront communication.", icon: ShieldCheck },
            { title: "Accessibility", desc: "Designing for speed, low data consumption, and mobile usability everywhere.", icon: Compass },
            { title: "Local Impact", desc: "Empowering local businesses, guides, and drivers to thrive digitally.", icon: MapPin },
            { title: "Excellence", desc: "Building high-performance software built for scalable regional growth.", icon: Users }
          ].map((val, idx) => {
            const IconComp = val.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-[#e6dfd5] card-hover-effect space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#f4efe8] flex items-center justify-center text-[#c47c2b]">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#191816]">{val.title}</h3>
                <p className="text-xs text-[#5e5950] leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
