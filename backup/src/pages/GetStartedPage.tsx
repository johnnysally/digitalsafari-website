import { useEffect, useState } from 'react';
import { getSiteConfig } from '../api/publicApi';
import type { SiteConfig } from '../types';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const GetStartedPage = () => {
    const [config, setConfig] = useState<SiteConfig | null>(null);

    useEffect(() => {
        getSiteConfig().then(setConfig).catch(() => {});
    }, []);

    return (
        <div className="pt-32 pb-24 px-4">
            <SectionHeader
                title="Get Started with DigitalSafari"
                subtitle="Choose how you want to use the platform."
            />

            <div className="mt-16 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
                <Card hover className="text-center">
                    <div className="text-6xl mb-4">🧳</div>
                    <h3 className="text-2xl font-bold text-white mb-2">I'm a Customer</h3>
                    <p className="text-sm text-slate-400 mb-6">
                        Discover accommodation, food, transport, and experiences. Book and order through one platform.
                    </p>
                    {config?.app_links?.customer && (
                        <Button href={config.app_links.customer} size="lg">
                            Start Your Journey
                        </Button>
                    )}
                </Card>

                <Card hover className="text-center">
                    <div className="text-6xl mb-4">🏪</div>
                    <h3 className="text-2xl font-bold text-white mb-2">I'm a Business</h3>
                    <p className="text-sm text-slate-400 mb-6">
                        Join as a partner. Reach more customers and manage your business digitally.
                    </p>
                    <Button href="/businesses" size="lg">
                        Become a Partner
                    </Button>
                </Card>
            </div>
        </div>
    );
};

export default GetStartedPage;