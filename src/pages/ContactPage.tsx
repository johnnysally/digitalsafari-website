import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { sendContact } from "../api/publicApi";
import { useSiteConfig } from "../context/SiteConfigContext";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const config = useSiteConfig();
  const whatsappUrl = config?.whatsapp_number ? `https://wa.me/${config.whatsapp_number.replace(/\D/g, "")}` : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitting(true);
    try {
      await sendContact(formData);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f9f7f4] min-h-screen text-[#191816] pt-8 pb-20">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eae3d9] text-[#191816] text-xs font-bold uppercase tracking-wider mb-6">
          <span>GET IN TOUCH</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1]">
          We'd love to <br />
          <span className="text-[#c47c2b]">hear from you.</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#5e5950] max-w-2xl mx-auto leading-relaxed">
          Whether you have a inquiry about traveling with DigitalSafari or registering your business as a partner, our team is here to help.
        </p>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-[#e6dfd5] space-y-6 shadow-xs">
              <h3 className="text-xl font-bold text-[#191816]">Official Channels</h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#f4efe8] flex items-center justify-center text-[#c47c2b] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#191816]">General Support</h5>
                    <a href={config?.support_email ? `mailto:${config.support_email}` : undefined} className="text-[#c47c2b] underline">
                      {config?.support_email || "Contact support"}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-[#f4efe8]">
                  <div className="w-10 h-10 rounded-xl bg-[#f4efe8] flex items-center justify-center text-[#c47c2b] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#191816]">Business & Partner Inquiries</h5>
                    <a href={config?.support_email ? `mailto:${config.support_email}` : undefined} className="text-[#c47c2b] underline">
                      {config?.support_email || "Contact support"}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-[#f4efe8]">
                  <div className="w-10 h-10 rounded-xl bg-[#f4efe8] flex items-center justify-center text-[#c47c2b] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#191816]">Telephone</h5>
                    <p className="text-[#5e5950]">{config?.support_phone || "Contact support"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-[#f4efe8]">
                  <div className="w-10 h-10 rounded-xl bg-[#f4efe8] flex items-center justify-center text-[#c47c2b] shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#191816]">WhatsApp Support</h5>
                    <a href={whatsappUrl || undefined} target="_blank" rel="noopener noreferrer" className="text-[#c47c2b] underline">
                      Chat on WhatsApp ➔
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Locations */}
            <div className="bg-[#f4efe8] p-8 rounded-3xl border border-[#e6dfd5] space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#191816] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c47c2b]" />
                Operating Regions in Kenya
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-[#191816]">
                <div className="bg-white p-3 rounded-xl border border-[#e6dfd5]">
                  <span>Naivasha & Lakesides</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#e6dfd5]">
                  <span>Nakuru CBD & Suburbs</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#e6dfd5]">
                  <span>Nairobi Metropolis</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#e6dfd5]">
                  <span>Mombasa & Coast</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#e6dfd5] shadow-xs space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#191816]">Send us a message</h3>
                <p className="text-xs sm:text-sm text-[#5e5950] mt-1">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-900 p-8 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                  <h4 className="text-lg font-bold">Message Received!</h4>
                  <p className="text-xs text-green-700 max-w-sm mx-auto">
                    Asante! Thank you for contacting DigitalSafari. A representative will reach out to your email shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-bold text-green-900 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#191816]">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#f9f7f4] border border-[#e6dfd5] text-xs focus:outline-none focus:border-[#c47c2b]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#191816]">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#f9f7f4] border border-[#e6dfd5] text-xs focus:outline-none focus:border-[#c47c2b]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#191816]">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+254 700 000 000"
                        className="w-full px-4 py-3 rounded-xl bg-[#f9f7f4] border border-[#e6dfd5] text-xs focus:outline-none focus:border-[#c47c2b]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#191816]">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f9f7f4] border border-[#e6dfd5] text-xs focus:outline-none focus:border-[#c47c2b]"
                      >
                        <option value="general">General Traveler Inquiry</option>
                        <option value="partner">Become a Business Partner</option>
                        <option value="support">Customer Booking Support</option>
                        <option value="press">Press & Media</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#191816]">Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help your journey or business?"
                      className="w-full px-4 py-3 rounded-xl bg-[#f9f7f4] border border-[#e6dfd5] text-xs focus:outline-none focus:border-[#c47c2b]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#c47c2b] hover:bg-[#b06d20] text-white text-xs font-bold uppercase tracking-wider py-4 rounded-full shadow-sm transition-all"
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? "Sending..." : "Submit Message"}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
