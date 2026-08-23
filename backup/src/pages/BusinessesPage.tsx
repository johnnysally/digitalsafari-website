import { useEffect, useState } from 'react';
import { getSiteConfig } from '../api/publicApi';
import type { SiteConfig } from '../types';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const benefits = [
    { title: 'Reach More Customers', description: 'Increase your digital visibility and connect with travelers looking for your services.', icon: '📈' },
    { title: 'Digital Presence', description: 'Build a professional digital presence without building your own platform.', icon: '💻' },
    { title: 'Receive Bookings', description: 'Get bookings and orders directly through the DigitalSafari platform.', icon: '📅' },
    { title: 'Business Tools', description: 'Manage your offerings, pricing, and availability with platform tools.', icon: '🛠️' },
];

const BusinessesPage = () => {
    const [config, setConfig] = useState<SiteConfig | null>(null);

    useEffect(() => {
        getSiteConfig().then(setConfig).catch(() => {});
    }, []);

    const partnerUrl = config?.app_links?.partner_landing || config?.app_links?.transport_partner;

    return (
        <div className="pt-32 pb-24 px-4">
            <SectionHeader
                title="Grow with DigitalSafari"
                subtitle="Join a connected platform designed for travel and hospitality businesses."
            />

            <div className="mt-16 grid gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
                {benefits.map((benefit) => (
                    <Card key={benefit.title} hover>
                        <div className="text-4xl mb-4">{benefit.icon}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                        <p className="text-sm text-slate-400">{benefit.description}</p>
                    </Card>
                ))}
            </div>

            <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to grow your business?</h3>
                <p className="text-slate-400 mb-8">Choose your business type and start your journey with DigitalSafari.</p>
                {partnerUrl && (
                    <Button href={partnerUrl} size="lg">
                        Choose Your Business Type →
                    </Button>
                )}
            </div>
        </div>
    );
};

export default BusinessesPage;