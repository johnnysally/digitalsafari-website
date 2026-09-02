import React, { FormEvent, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Building2, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
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
                subject: 'partner',
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
            <div className="bg-[#f9f7f4] min-h-screen text-[#191816] flex items-center justify-center px-4">
                <div className="text-center max-w-md">
                    <div className="mx-auto w-16 h-16 rounded-full bg-[#f4efe8] flex items-center justify-center text-[#c47c2b] mb-6">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-extrabold">Application received.</h1>
                    <p className="mt-3 text-sm text-[#5e5950] max-w-sm mx-auto leading-relaxed">
                        Thanks for your interest in partnering with DigitalSafari. Our team will be in touch soon.
                    </p>
                    <Link to="/" className="mt-8 inline-flex items-center gap-2 bg-[#c47c2b] hover:bg-[#b06d20] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors">
                        Return home
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#f9f7f4] min-h-screen text-[#191816] pt-32 pb-20">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/businesses" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5e5950] hover:text-[#c47c2b] transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to partners
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mt-10 items-start">
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eae3d9] text-[#191816] text-xs font-bold uppercase tracking-wider mb-6">
                            <Building2 className="w-4 h-4 text-[#c47c2b]" />
                            Partner registration
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
                            Bring your business to <span className="text-[#c47c2b]">DigitalSafaris.</span>
                        </h1>
                        <p className="mt-6 text-base sm:text-lg text-[#5e5950] leading-relaxed max-w-md">
                            Tell us about your business and our partner team will review your application and help you get set up.
                        </p>
                        <div className="mt-10 border-t border-[#e6dfd5] pt-6 space-y-4 text-sm text-[#5e5950]">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#c47c2b] shrink-0" />
                                <span>Reach travelers looking for trusted local services.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#c47c2b] shrink-0" />
                                <span>Manage bookings, listings, and availability in one place.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#c47c2b] shrink-0" />
                                <span>Our team will contact you after reviewing your details.</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 bg-white rounded-3xl border border-[#e6dfd5] p-6 sm:p-10 shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-extrabold">Start your application</h2>
                                <p className="mt-2 text-sm text-[#5e5950]">A few details is all we need to get started.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <label className="space-y-2 text-sm font-semibold">
                                    Contact name
                                    <input
                                        required
                                        name="contactName"
                                        type="text"
                                        autoComplete="name"
                                        placeholder="Your full name"
                                        value={formData.contactName}
                                        onChange={(event) => handleChange('contactName', event.target.value)}
                                        className="w-full rounded-xl border border-[#dcd3c7] bg-[#f9f7f4] px-4 py-3 text-sm font-normal outline-none focus:border-[#c47c2b] focus:ring-2 focus:ring-[#c47c2b]/20 transition"
                                    />
                                </label>
                                <label className="space-y-2 text-sm font-semibold">
                                    Business name
                                    <input
                                        required
                                        name="businessName"
                                        type="text"
                                        autoComplete="organization"
                                        placeholder="Business name"
                                        value={formData.businessName}
                                        onChange={(event) => handleChange('businessName', event.target.value)}
                                        className="w-full rounded-xl border border-[#dcd3c7] bg-[#f9f7f4] px-4 py-3 text-sm font-normal outline-none focus:border-[#c47c2b] focus:ring-2 focus:ring-[#c47c2b]/20 transition"
                                    />
                                </label>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <label className="space-y-2 text-sm font-semibold">
                                    Email address
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="you@business.com"
                                        value={formData.email}
                                        onChange={(event) => handleChange('email', event.target.value)}
                                        className="w-full rounded-xl border border-[#dcd3c7] bg-[#f9f7f4] px-4 py-3 text-sm font-normal outline-none focus:border-[#c47c2b] focus:ring-2 focus:ring-[#c47c2b]/20 transition"
                                    />
                                </label>
                                <label className="space-y-2 text-sm font-semibold">
                                    Phone number
                                    <input
                                        required
                                        name="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        placeholder="+254 700 000 000"
                                        value={formData.phone}
                                        onChange={(event) => handleChange('phone', event.target.value)}
                                        className="w-full rounded-xl border border-[#dcd3c7] bg-[#f9f7f4] px-4 py-3 text-sm font-normal outline-none focus:border-[#c47c2b] focus:ring-2 focus:ring-[#c47c2b]/20 transition"
                                    />
                                </label>
                            </div>

                            <label className="space-y-2 text-sm font-semibold">
                                Business type
                                <select
                                    required
                                    name="businessType"
                                    value={formData.businessType}
                                    onChange={(event) => handleChange('businessType', event.target.value)}
                                    className="w-full rounded-xl border border-[#dcd3c7] bg-[#f9f7f4] px-4 py-3 text-sm font-normal outline-none focus:border-[#c47c2b] focus:ring-2 focus:ring-[#c47c2b]/20 transition"
                                >
                                    <option value="" disabled>Select your business type</option>
                                    <option value="accommodation">Hotel, BnB, or lodge</option>
                                    <option value="restaurant">Restaurant or food business</option>
                                    <option value="transport">Transport provider</option>
                                    <option value="experience">Tour or experience operator</option>
                                    <option value="other">Other hospitality business</option>
                                </select>
                            </label>

                            <label className="space-y-2 text-sm font-semibold">
                                Tell us about your business <span className="font-normal text-[#8e877e]">(optional)</span>
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder="Share your location, services, or anything else we should know."
                                    value={formData.message}
                                    onChange={(event) => handleChange('message', event.target.value)}
                                    className="w-full resize-none rounded-xl border border-[#dcd3c7] bg-[#f9f7f4] px-4 py-3 text-sm font-normal outline-none focus:border-[#c47c2b] focus:ring-2 focus:ring-[#c47c2b]/20 transition"
                                />
                            </label>

                            {error && (
                                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full inline-flex items-center justify-center gap-2 bg-[#c47c2b] hover:bg-[#b06d20] disabled:cursor-not-allowed disabled:opacity-70 text-white text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-full transition-colors"
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
                            <p className="text-center text-xs text-[#8e877e]">
                                By submitting, you agree to be contacted by the DigitalSafari partner team.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};