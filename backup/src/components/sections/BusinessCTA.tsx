import { useEffect, useState } from 'react';
import { getSiteConfig } from '../../api/publicApi';
import type { SiteConfig } from '../../types';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';

const BusinessCTA = () => {
    const [config, setConfig] = useState<SiteConfig | null>(null);

    useEffect(() => {
        getSiteConfig().then(setConfig).catch(() => {});
    }, []);

    const partnerUrl = config?.app_links?.partner_landing || config?.app_links?.transport_partner;

    const partnerTypes = ['Hotels', 'BnBs', 'Apartments', 'Lodges', 'Restaurants', 'Transport Providers', 'Tourism Businesses'];

    return (
        <section className="py-24 px-4 bg-slate-900/50">
            <SectionHeader
                title="Grow your business with DigitalSafari"
                subtitle="Join a connected platform designed to help businesses reach more customers."
            />
            <div className="mt-10 flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
                {partnerTypes.map((type) => (
                    <span key={type} className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm">
                        {type}
                    </span>
                ))}
            </div>
            <div className="mt-10 text-center">
                {partnerUrl && (
                    <Button href={partnerUrl} size="lg">
                        Become a DigitalSafari Partner
                    </Button>
                )}
            </div>
        </section>
    );
};

export default BusinessCTA;