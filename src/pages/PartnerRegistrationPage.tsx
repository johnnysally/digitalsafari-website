import React, { FormEvent, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Building2, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../context/SiteConfigContext';
import { sendContact } from '../api/publicApi';

type PartnerFormData = {
    contactName: string;
    businessName: string;
    email: string;
    phone: string;
    businessType: string;
    message: string;
};

const initialForm: PartnerFormData = {
    contactName: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
};

export const PartnerRegistrationPage: React.FC = () => {
    const config = useSiteConfig();
    const [formData, setFormData] = useState<PartnerFormData>(initialForm);
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (field: keyof PartnerFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');

        try {
            setSubmitting(true);

            const businessSummary = [
                `Business name: ${formData.businessName}`,
                `Business type: ${formData.businessType}`,
                formData.message ? `Details: ${formData.message}` : '',
            ]
                .filter(Boolean)
                .join('\n');

            await sendContact({
                name: formData.contactName,
                email: formData.email,
                phone: formData.phone,
                subject: 'Partner Application',
                message: businessSummary,
            });

            setSubmitted(true);
        } catch (submitError) {
            console.error('Partner registration submission failed:', submitError);
            setError("We couldn't submit your application right now. Please try again or contact support.");
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
                <div className="text-center max-w-md">
                    <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-bold text-white">Application received.</h1>
                    <p className="mt-3 text-slate-400 leading-relaxed">
                        Thanks for your interest in partnering with {config?.site_name || 'DigitalSafari'}. Our team will be in touch soon.
                    </p>
                    <Link to="/" className="mt-8 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-bold px-6 py-3.5 rounded-full transition-colors">
                        Return home
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 pt-32 pb-20 text-white">
            <section className="max-w-6xl mx-auto px-4">
                <Link to="/businesses" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-emerald-400 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to partners
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mt-10 items-start">
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
                            <Building2 className="w-4 h-4" />
                            Partner registration
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
                            Bring your business to <span className="text-emerald-400">{config?.site_name || 'DigitalSafari'}.</span>
                        </h1>
                        <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-md">
                            Tell us about your business and our partner team will review your application and help you get set up.
                        </p>
                        <div className="mt-10 border-t border-slate-800 pt-6 space-y-4 text-sm text-slate-400">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                <span>Reach travelers looking for trusted local services.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                <span>Manage bookings, listings, and availability in one place.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                <span>Our team will contact you after reviewing your details.</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold text-white">Start your application</h2>
                                <p className="mt-2 text-sm text-slate-400">A few details is all we need to get started.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <label className="space-y-2 text-sm font-semibold text-slate-300">
                                    Contact name
                                    <input
                                        required
                                        type="text"
                                        autoComplete="name"
                                        placeholder="Your full name"
                                        value={formData.contactName}
                                        onChange={(e) => handleChange('contactName', e.target.value)}
                                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-normal text-white outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition"
                                    />
                                </label>
                                <label className="space-y-2 text-sm font-semibold text-slate-300">
                                    Business name
                                    <input
                                        required
                                        type="text"
                                        autoComplete="organization"
                                        placeholder="Business name"
                                        value={formData.businessName}
                                        onChange={(e) => handleChange('businessName', e.target.value)}
                                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-normal text-white outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition"
                                    />
                                </label>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <label className="space-y-2 text-sm font-semibold text-slate-300">
                                    Email address
                                    <input
                                        required
                                        type="email"
                                        autoComplete="email"
                                        placeholder="you@business.com"
                                        value={formData.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-normal text-white outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition"
                                    />
                                </label>
                                <label className="space-y-2 text-sm font-semibold text-slate-300">
                                    Phone number
                                    <input
                                        required
                                        type="tel"
                                        autoComplete="tel"
                                        placeholder="+254 700 000 000"
                                        value={formData.phone}
                                        onChange={(e) => handleChange('phone', e.target.value)}
                                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-normal text-white outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition"
                                    />
                                </label>
                            </div>

                            <label className="space-y-2 text-sm font-semibold text-slate-300">
                                Business type
                                <select
                                    required
                                    value={formData.businessType}
                                    onChange={(e) => handleChange('businessType', e.target.value)}
                                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-normal text-white outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition"
                                >
                                    <option value="" disabled>Select your business type</option>
                                    <option value="accommodation">Hotel, BnB, or lodge</option>
                                    <option value="restaurant">Restaurant or food business</option>
                                    <option value="transport">Transport provider</option>
                                    <option value="experience">Tour or experience operator</option>
                                    <option value="other">Other hospitality business</option>
                                </select>
                            </label>

                            <label className="space-y-2 text-sm font-semibold text-slate-300">
                                Tell us about your business <span className="font-normal text-slate-500">(optional)</span>
                                <textarea
                                    rows={4}
                                    placeholder="Share your location, services, or anything else we should know."
                                    value={formData.message}
                                    onChange={(e) => handleChange('message', e.target.value)}
                                    className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-normal text-white outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition"
                                />
                            </label>

                            {error && (
                                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70 text-slate-950 text-sm font-bold px-6 py-4 rounded-full transition-colors"
                            >
                                {submitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Submit application
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                            <p className="text-center text-xs text-slate-500">
                                By submitting, you agree to be contacted by the {config?.site_name || 'DigitalSafari'} partner team.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};