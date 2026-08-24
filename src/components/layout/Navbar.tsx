import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Compass, Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS } from "../../utils/constants";
import { useSiteConfig } from "../../context/SiteConfigContext";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const config = useSiteConfig();
  const customerUrl = config?.app_links.customer;
  const partnerUrl = config?.app_links.partner_landing || config?.app_links.transport_partner;

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#f9f7f4]/90 backdrop-blur-md border-b border-[#e6dfd5]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#c47c2b] to-[#e6a254] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 animate-pulse" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#191816]">
              Digital<span className="text-[#c47c2b]">Safari</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#eae3d9]/60 px-4 py-2 rounded-full border border-[#dcd3c7]">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                    active
                      ? "bg-[#191816] text-white shadow-sm"
                      : "text-[#5e5950] hover:text-[#191816] hover:bg-[#dcd3c7]/50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={customerUrl || "/get-started"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#c47c2b] hover:bg-[#b06d20] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5"
            >
              Start Your Journey
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#191816] hover:bg-[#eae3d9] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f9f7f4] border-b border-[#e6dfd5] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider ${
                  isActive(item.href)
                    ? "bg-[#191816] text-white"
                    : "text-[#191816] hover:bg-[#eae3d9]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-[#e6dfd5] flex flex-col gap-2">
            <a
              href={customerUrl || "/get-started"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[#c47c2b] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              Start Your Journey
            </a>
            <a
              href={partnerUrl || "/businesses"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center border border-[#191816] text-[#191816] py-3 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              Become a Partner
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
