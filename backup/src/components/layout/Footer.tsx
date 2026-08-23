import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSiteConfig } from '../../api/publicApi';
import type { SiteConfig } from '../../types';

const Footer = () => {
    const [config, setConfig] = useState<SiteConfig | null>(null);

    useEffect(() => {
        getSiteConfig().then(setConfig).catch(() => {});
    }, []);

    const socials = config?.social_links;
    const hasSocials = socials && Object.values(socials).some(Boolean);
    const partnerUrl = config?.app_links?.partner_landing || config?.app_links?.transport_partner;

    return (
        <footer className="border-t border-slate-800 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid gap-8 md:grid-cols-4">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/logo.svg" alt="DigitalSafari" className="h-11 w-11 rounded-full" />
                            <span className="font-bold text-lg text-white">{config?.site_name || 'DigitalSafari'}</span>
                        </div>
                        <p className="text-sm text-slate-400">{config?.site_tagline || 'Your journey. One platform.'}</p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Explore</h3>
                        <div className="space-y-2 text-sm">
                            <Link to="/about" className="block text-slate-400 hover:text-emerald-400">About</Link>
                            <Link to="/how-it-works" className="block text-slate-400 hover:text-emerald-400">How It Works</Link>
                            <Link to="/services" className="block text-slate-400 hover:text-emerald-400">Services</Link>
                            <Link to="/faq" className="block text-slate-400 hover:text-emerald-400">FAQ</Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Businesses</h3>
                        <div className="space-y-2 text-sm">
                            {partnerUrl && <a href={partnerUrl} className="block text-slate-400 hover:text-emerald-400">Become a Partner</a>}
                            {config?.app_links?.transport_partner && <a href={config.app_links.transport_partner} className="block text-slate-400 hover:text-emerald-400">Transport Partner</a>}
                            {config?.app_links?.restaurant_partner && <a href={config.app_links.restaurant_partner} className="block text-slate-400 hover:text-emerald-400">Restaurant Partner</a>}
                            {config?.app_links?.accommodation_partner && <a href={config.app_links.accommodation_partner} className="block text-slate-400 hover:text-emerald-400">Accommodation Partner</a>}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Support</h3>
                        <div className="space-y-2 text-sm">
                            <Link to="/contact" className="block text-slate-400 hover:text-emerald-400">Contact</Link>
                            {config?.support_email && <a href={`mailto:${config.support_email}`} className="block text-slate-400 hover:text-emerald-400">{config.support_email}</a>}
                            {config?.support_phone && <a href={`tel:${config.support_phone}`} className="block text-slate-400 hover:text-emerald-400">{config.support_phone}</a>}
                            {config?.whatsapp_number && <a href={`https://wa.me/${config.whatsapp_number}`} className="block text-slate-400 hover:text-emerald-400">WhatsApp</a>}
                        </div>
                    </div>
                </div>

                {hasSocials && (
                    <div className="flex gap-4 mt-8 pt-8 border-t border-slate-800">
                        {socials?.instagram && <a href={socials.instagram} target="_blank" rel="noopener" className="text-slate-400 hover:text-emerald-400 text-sm">Instagram</a>}
                        {socials?.tiktok && <a href={socials.tiktok} target="_blank" rel="noopener" className="text-slate-400 hover:text-emerald-400 text-sm">TikTok</a>}
                        {socials?.facebook && <a href={socials.facebook} target="_blank" rel="noopener" className="text-slate-400 hover:text-emerald-400 text-sm">Facebook</a>}
                        {socials?.linkedin && <a href={socials.linkedin} target="_blank" rel="noopener" className="text-slate-400 hover:text-emerald-400 text-sm">LinkedIn</a>}
                        {socials?.x && <a href={socials.x} target="_blank" rel="noopener" className="text-slate-400 hover:text-emerald-400 text-sm">X</a>}
                        {socials?.youtube && <a href={socials.youtube} target="_blank" rel="noopener" className="text-slate-400 hover:text-emerald-400 text-sm">YouTube</a>}
                    </div>
                )}

                <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                    © {new Date().getFullYear()} {config?.site_name || 'DigitalSafari'}. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;