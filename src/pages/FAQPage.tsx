import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, HelpCircle, Mail, MessageSquare } from "lucide-react";
import { FAQS } from "../utils/constants";
import { LINKS } from "../utils/links";

export const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f9f7f4] min-h-screen text-[#191816] pt-8 pb-20">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eae3d9] text-[#191816] text-xs font-bold uppercase tracking-wider mb-6">
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1]">
          Everything you need <br />
          <span className="text-[#c47c2b]">to know.</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#5e5950] max-w-2xl mx-auto leading-relaxed">
          Find answers to common questions about DigitalSafari services, customer bookings, and partner registration.
        </p>
      </section>

      {/* Accordion List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#e6dfd5] overflow-hidden transition-all shadow-xs"
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#191816] hover:bg-[#f4efe8]/50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#c47c2b] shrink-0" />
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#5e5950] transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 text-[#c47c2b]" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#5e5950] leading-relaxed border-t border-[#f4efe8]">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Have More Questions Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-[#f4efe8] p-8 rounded-3xl border border-[#e6dfd5] text-center space-y-4">
          <h3 className="text-xl font-bold text-[#191816]">Still have questions?</h3>
          <p className="text-xs sm:text-sm text-[#5e5950] max-w-md mx-auto">
            Can't find the answer you're looking for? Reach out directly to our support team and we'll get back to you promptly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#c47c2b] hover:bg-[#b06d20] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-sm transition-all"
            >
              <Mail className="w-4 h-4" />
              Contact Support
            </Link>
            <a
              href={`mailto:${LINKS.CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 border border-[#191816] text-[#191816] hover:bg-[#191816] hover:text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
