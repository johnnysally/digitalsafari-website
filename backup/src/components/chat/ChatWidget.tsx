import { useEffect, useState } from 'react';
import { getSiteConfig, sendAiChat } from '../../api/publicApi';
import type { AiChatConfig } from '../../types';

const ChatWidget = () => {
    const [config, setConfig] = useState<AiChatConfig | null>(null);
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<{ sender: 'user' | 'ai'; text: string }[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getSiteConfig().then((c) => {
            if (c.ai_chat?.enabled) {
                setConfig(c.ai_chat);
                setMessages([{ sender: 'ai', text: c.ai_chat.greeting }]);
            }
        }).catch(() => {});
    }, []);

    if (!config) return null;

    const handleSend = async () => {
        if (!input.trim() || loading) return;
        const userMessage = input.trim();
        setInput('');
        setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
        setLoading(true);
        try {
            const res = await sendAiChat(userMessage);
            setMessages((prev) => [...prev, { sender: 'ai', text: res.reply }]);
        } catch {
            setMessages((prev) => [...prev, { sender: 'ai', text: 'Sorry, I encountered an error. Please try again.' }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full flex items-center justify-center text-2xl shadow-xl hover:scale-110 transition"
                style={{ backgroundColor: config.color }}
            >
                {open ? '✕' : '💬'}
            </button>

            {open && (
                <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[90vw] rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden">
                    <div className="p-4 border-b border-slate-800" style={{ backgroundColor: config.color }}>
                        <p className="font-bold text-slate-950">{config.name}</p>
                        <p className="text-xs text-slate-900/70">Online — ready to help</p>
                    </div>
                    <div className="h-96 overflow-y-auto p-4 space-y-3">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${msg.sender === 'user' ? 'bg-slate-800 text-white' : 'bg-slate-900 text-slate-200 border border-slate-800'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-start">
                                <div className="rounded-2xl px-4 py-2 bg-slate-900 text-slate-400 text-sm">Typing...</div>
                            </div>
                        )}
                    </div>
                    <div className="p-3 border-t border-slate-800 flex gap-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask me anything..."
                            className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white outline-none focus:border-emerald-500"
                        />
                        <button onClick={handleSend} disabled={loading} className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400 disabled:opacity-50">
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatWidget;