import React from "react";
import { Link } from "react-router-dom";
import { Compass, ArrowUpRight } from "lucide-react";
import { useSiteConfig } from "../../context/SiteConfigContext";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const config = useSiteConfig();
  const customerUrl = config?.app_links.customer;
  const partnerUrl = config?.app_links.partner_landing || config?.app_links.transport_partner;

  return (
    <footer className="bg-[#141312] text-[#dcd6cd] pt-16 pb-12 border-t border-[#2a2825]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2a2825]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block p-2 bg-white rounded-2xl shadow-sm border border-white/10 hover:opacity-95 transition-opacity">
              <img
                src="/logo.png"
                alt="DigitalSafaris Logo"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-[#9e978e] max-w-md leading-relaxed">
              Your journey. One platform. Connecting travel, accommodation, food, transport, and local experiences across Kenya into one unified digital ecosystem.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={customerUrl || "/get-started"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-[#c47c2b] hover:bg-[#b06d20] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-colors"
              >
                Start Your Journey
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <Link
                to="/partner-registration"
                className="inline-flex items-center gap-1 border border-[#3a3733] hover:border-[#c47c2b] text-[#dcd6cd] hover:text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-colors"
              >
                Partner With Us
              </Link>
            </div>
          </div>

          {/* Links Column 1: Explore */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#c47c2b]">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Businesses */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#c47c2b]">Businesses</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/partner-registration" className="hover:text-white transition-colors">Become a Partner</Link>
              </li>
              <li>
                <a href={partnerUrl || "/businesses"} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  Partner Portal <ArrowUpRight className="w-3 h-3 text-[#9e978e]" />
                </a>
              </li>
              <li>
                <Link to="/services/accommodation" className="hover:text-white transition-colors">Hotels & BnBs</Link>
              </li>
              <li>
                <Link to="/services/food" className="hover:text-white transition-colors">Restaurants</Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Legal & Support */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#c47c2b]">Legal & Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <span className="text-[#8e877e]">Privacy Policy</span>
              </li>
              <li>
                <span className="text-[#8e877e]">Terms of Service</span>
              </li>
              <li className="pt-2 text-xs text-[#8e877e]">
                {config?.support_email && <>Direct Email: <a href={`mailto:${config.support_email}`} className="text-[#c47c2b] underline">{config.support_email}</a></>}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8e877e]">
          <p>© {currentYear} DigitalSafari — All rights reserved.</p>

          <div className="flex items-center space-x-4">
            <a href={config?.social_links.instagram || undefined} target="_blank" rel="noopener noreferrer" className="hover:text-[#c47c2b] transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href={config?.social_links.facebook || undefined} target="_blank" rel="noopener noreferrer" className="hover:text-[#c47c2b] transition-colors" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.7 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg>
            </a>
            <a href={config?.social_links.linkedin || undefined} target="_blank" rel="noopener noreferrer" className="hover:text-[#c47c2b] transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
            </a>
            <a href={config?.social_links.x || undefined} target="_blank" rel="noopener noreferrer" className="hover:text-[#c47c2b] transition-colors" aria-label="X Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
