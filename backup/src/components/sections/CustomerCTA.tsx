import { useEffect, useState } from 'react';
import { getSiteConfig } from '../../api/publicApi';
import type { SiteConfig } from '../../types';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';

const CustomerCTA = () => {
    const [config, setConfig] = useState<SiteConfig | null>(null);

    useEffect(() => {
        getSiteConfig().then(setConfig).catch(() => {});
    }, []);

    return (
        <section className="py-24 px-4">
            <SectionHeader
                title="Everything you need for the journey, connected"
                subtitle="Discover services, find accommodation, explore food options, access transportation, and manage everything through one platform."
            />
            <div className="mt-10 text-center">
                {config?.app_links?.customer && (
                    <Button href={config.app_links.customer} size="lg">
                        Start Your Journey
                    </Button>
                )}
            </div>
        </section>
    );
};

export default CustomerCTA;