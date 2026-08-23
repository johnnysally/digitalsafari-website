import SectionHeader from '../ui/SectionHeader';

const steps = [
    { number: '01', title: 'Discover', description: 'Explore destinations, accommodation, food, transport, and experiences.' },
    { number: '02', title: 'Choose', description: 'Compare available options and select what fits your needs.' },
    { number: '03', title: 'Book or Order', description: 'Complete the required booking or order through the platform.' },
    { number: '04', title: 'Move', description: 'Use connected transportation services where available.' },
    { number: '05', title: 'Experience', description: 'Enjoy your journey with everything connected.' },
];

const HowItWorks = () => {
    return (
        <section className="py-24 px-4 bg-slate-900/50">
            <SectionHeader
                title="How DigitalSafari works"
                subtitle="A simple, connected journey from discovery to experience."
            />
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
                {steps.map((step) => (
                    <div key={step.number} className="text-center">
                        <div className="text-4xl font-bold text-emerald-400 mb-4">{step.number}</div>
                        <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                        <p className="text-sm text-slate-400">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;