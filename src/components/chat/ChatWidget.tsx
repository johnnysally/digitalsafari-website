import React, { useEffect, useRef, useState } from "react";
import { MessageSquare, X, Send, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import { sendAiChat } from "../../api/publicApi";
import { useSiteConfig } from "../../context/SiteConfigContext";
import { LINKS } from "../../utils/links";

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Jambo! Welcome to DigitalSafari. How can I help you plan your journey or partner your business today?"
    }
  ]);
  const config = useSiteConfig();
  const customerUrl = LINKS.getCustomerUrl(config);
  const partnerUrl = LINKS.getPartnerUrl(config);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { sender: "user", text: userMsg }]);
    setInput("");

    sendAiChat(userMsg)
      .then((response) => setMessages(prev => [...prev, { sender: "bot", text: response.reply || response.message || "Thanks for your message." }]))
      .catch(() => setMessages(prev => [...prev, { sender: "bot", text: "Sorry, we could not reach the concierge right now." }]));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-[#e6dfd5] flex flex-col overflow-hidden transition-all animate-in fade-in slide-in-from-bottom-4">
          
          {/* Header */}
          <div className="bg-[#191816] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#c47c2b] flex items-center justify-center text-white">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold">DigitalSafari Concierge</h4>
                <span className="text-[10px] text-[#c47c2b] font-semibold tracking-wide uppercase">Online Assistance</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#9e978e] hover:text-white transition-colors"
              aria-label="Close concierge chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="p-4 h-64 overflow-y-auto space-y-3 bg-[#f9f7f4]">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed ${
                    m.sender === "user"
                      ? "bg-[#c47c2b] text-white rounded-tr-none font-medium"
                      : "bg-white text-[#191816] border border-[#e6dfd5] rounded-tl-none shadow-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-3 py-2 bg-white border-t border-[#e6dfd5] flex items-center gap-2 overflow-x-auto text-[11px]">
            <a href={customerUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 px-2.5 py-1 rounded-full bg-[#eae3d9] text-[#191816] font-semibold hover:bg-[#c47c2b] hover:text-white transition-colors">
              Start Journey ➔
            </a>
            <Link to="/partner-registration" className="shrink-0 px-2.5 py-1 rounded-full bg-[#eae3d9] text-[#191816] font-semibold hover:bg-[#c47c2b] hover:text-white transition-colors">
              Become Partner ➔
            </Link>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-[#e6dfd5] flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 px-3 py-1.5 rounded-full bg-[#f9f7f4] border border-[#e6dfd5] text-xs text-[#191816] placeholder:text-[#8e877e] focus:outline-none focus:border-[#c47c2b]"
            />
            <button
              type="submit"
              className="w-8 h-8 rounded-full bg-[#c47c2b] text-white flex items-center justify-center hover:bg-[#b06d20] transition-colors"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-[#c47c2b] text-white flex items-center justify-center shadow-xl hover:bg-[#b06d20] hover:scale-105 transition-all group"
          aria-label="Open DigitalSafari concierge chat"
        >
          <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      )}
    </div>
  );
};
