import { useEffect, useState } from 'react';
import { getSiteConfig, sendContact } from '../api/publicApi';
import type { SiteConfig } from '../types';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';

const ContactPage = () => {
    const [config, setConfig] = useState<SiteConfig | null>(null);
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        getSiteConfig().then(setConfig).catch(() => {});
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        setError('');
        try {
            await sendContact(form);
            setSent(true);
            setForm({ name: '', email: '', phone: '', subject: '', message: '' });
            setTimeout(() => setSent(false), 5000);
        } catch {
            setError('Failed to send message. Please try again.');
        } finally {
            setSending(false);
        }
    };

    const inputClass = 'w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-500 transition';

    return (
        <div className="pt-32 pb-24 px-4">
            <SectionHeader
                title="Contact Us"
                subtitle="We'd love to hear from you. Reach out with any questions."
            />

            <div className="mt-16 grid gap-8 max-w-5xl mx-auto lg:grid-cols-3">
                <div className="space-y-4">
                    {config?.support_email && (
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                            <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Email</p>
                            <a href={`mailto:${config.support_email}`} className="text-emerald-400 font-medium">{config.support_email}</a>
                        </div>
                    )}
                    {config?.support_phone && (
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                            <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Phone</p>
                            <a href={`tel:${config.support_phone}`} className="text-emerald-400 font-medium">{config.support_phone}</a>
                        </div>
                    )}
                    {config?.whatsapp_number && (
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                            <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">WhatsApp</p>
                            <a href={`https://wa.me/${config.whatsapp_number}`} className="text-emerald-400 font-medium">Chat on WhatsApp</a>
                        </div>
                    )}
                </div>

                <div className="lg:col-span-2">
                    {sent && (
                        <div className="mb-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-sm text-emerald-400">
                            Message sent successfully! We'll get back to you soon.
                        </div>
                    )}
                    {error && (
                        <div className="mb-4 rounded-xl bg-red-500/10 border border-red-500/30 p-4 text-sm text-red-400">{error}</div>
                    )}
                    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4">
                        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name *" required className={inputClass} />
                        <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" placeholder="Email *" required className={inputClass} />
                        <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone (optional)" className={inputClass} />
                        <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Subject" className={inputClass} />
                        <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Your message *" required rows={5} className={inputClass} />
                        <Button type="submit" size="lg" disabled={sending} className="w-full">
                            {sending ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;