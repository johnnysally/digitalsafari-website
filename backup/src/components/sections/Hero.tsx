import { useEffect, useState } from 'react';
import { getSiteConfig } from '../../api/publicApi';
import type { SiteConfig } from '../../types';
import Button from '../ui/Button';

const Hero = () => {
    const [config, setConfig] = useState<SiteConfig | null>(null);

    useEffect(() => {
        getSiteConfig().then(setConfig).catch(() => {});
    }, []);

    const partnerUrl = config?.app_links?.partner_landing || config?.app_links?.transport_partner;

    return (
        <section className="min-h-screen flex items-center justify-center px-4 pt-20" style={{ background: 'radial-gradient(circle at top left, rgba(16,185,129,0.2), transparent 40%), radial-gradient(circle at bottom right, rgba(59,130,246,0.15), transparent 40%), #020617' }}>
            <div className="text-center max-w-4xl">
                <p className="text-emerald-400 font-semibold uppercase tracking-[0.3em] text-sm mb-4">{config?.site_name || 'DigitalSafari'}</p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                    Your journey.<br />
                    <span className="text-emerald-400">One platform.</span>
                </h1>
                <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
                    {config?.site_description || 'Connecting accommodation, food, transportation, and experiences through one digital ecosystem.'}
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    {config?.app_links?.customer && (
                        <Button href={config.app_links.customer} size="lg">
                            Start Your Journey
                        </Button>
                    )}
                    {partnerUrl && (
                        <Button href={partnerUrl} variant="secondary" size="lg">
                            Become a Partner
                        </Button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;