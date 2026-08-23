import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';

const faqs = [
    {
        question: 'What is DigitalSafari?',
        answer: 'DigitalSafari is a unified digital platform designed to connect travel and hospitality services — accommodation, food, transportation, and experiences — in one ecosystem.',
    },
    {
        question: 'Who can use DigitalSafari?',
        answer: 'Customers looking to book stays, order food, or arrange transport. Businesses like hotels, restaurants, and transport providers can also join as partners.',
    },
    {
        question: 'What services are available?',
        answer: 'Currently, accommodation discovery, food ordering, and transport booking are available. Experiences will be added as the platform grows.',
    },
    {
        question: 'How do I book accommodation?',
        answer: 'Start your journey through the DigitalSafari app, browse available properties, select your dates, and complete your booking.',
    },
    {
        question: 'How can my business join?',
        answer: 'Click "Become a Partner" and complete the registration for your business type. Our team will review and approve your account.',
    },
    {
        question: 'Is DigitalSafari available outside Kenya?',
        answer: 'DigitalSafari is currently focused on Kenya, with plans for regional expansion in the future.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-4">
            <SectionHeader
                title="Frequently asked questions"
                subtitle="Quick answers to common questions about DigitalSafari."
            />
            <div className="mt-14 max-w-3xl mx-auto space-y-3">
                {faqs.map((faq, index) => (
                    <div key={index} className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between px-6 py-4 text-left"
                        >
                            <span className="font-semibold text-white text-sm">{faq.question}</span>
                            <span className="text-emerald-400 text-xl">{openIndex === index ? '−' : '+'}</span>
                        </button>
                        {openIndex === index && (
                            <div className="px-6 pb-4 text-sm text-slate-400">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;