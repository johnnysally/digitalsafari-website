import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

const customerSteps = [
    { number: '01', title: 'Visit DigitalSafari', description: 'Open the DigitalSafari app and explore available services.' },
    { number: '02', title: 'Discover services', description: 'Browse accommodation, food, transport, and more.' },
    { number: '03', title: 'Choose service', description: 'Select the service that fits your journey.' },
    { number: '04', title: 'Register or Login', description: 'Create your account or sign in to your existing one.' },
    { number: '05', title: 'Book or Order', description: 'Complete your booking or order through the platform.' },
    { number: '06', title: 'Manage activity', description: 'Track bookings, orders, payments, and more from your dashboard.' },
];

const businessSteps = [
    { number: '01', title: 'Visit DigitalSafari', description: 'Explore the platform and understand how it works.' },
    { number: '02', title: 'Become a Partner', description: 'Choose your business type and start registration.' },
    { number: '03', title: 'Register business', description: 'Provide your business details and credentials.' },
    { number: '04', title: 'Complete onboarding', description: 'Get verified and approved by the DigitalSafari team.' },
    { number: '05', title: 'Create business profile', description: 'Set up your offerings, pricing, and availability.' },
    { number: '06', title: 'Publish services', description: 'Make your services visible to customers.' },
    { number: '07', title: 'Receive customers', description: 'Start receiving bookings, orders, and requests.' },
    { number: '08', title: 'Manage business', description: 'Use the partner dashboard to manage everything.' },
];

const HowItWorksPage = () => {
    return (
        <div className="pt-32 pb-24 px-4">
            <SectionHeader
                title="How DigitalSafari works"
                subtitle="Whether you're a customer or a business, here's how the platform connects you."
            />

            <div className="mt-16 max-w-5xl mx-auto space-y-16">
                <section>
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Customer Journey</h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {customerSteps.map((step) => (
                            <Card key={step.number}>
                                <div className="text-3xl font-bold text-emerald-400 mb-3">{step.number}</div>
                                <h4 className="font-semibold text-white mb-1">{step.title}</h4>
                                <p className="text-sm text-slate-400">{step.description}</p>
                            </Card>
                        ))}
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Business Journey</h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {businessSteps.map((step) => (
                            <Card key={step.number}>
                                <div className="text-3xl font-bold text-emerald-400 mb-3">{step.number}</div>
                                <h4 className="font-semibold text-white mb-1">{step.title}</h4>
                                <p className="text-sm text-slate-400">{step.description}</p>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HowItWorksPage;