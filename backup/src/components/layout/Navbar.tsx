import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSiteConfig } from '../../api/publicApi';
import type { SiteConfig } from '../../types';
import Button from '../ui/Button';

const Navbar = () => {
    const [config, setConfig] = useState<SiteConfig | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        getSiteConfig().then(setConfig).catch(() => {});
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/how-it-works', label: 'How It Works' },
        { to: '/services', label: 'Services' },
        { to: '/businesses', label: 'For Businesses' },
        { to: '/faq', label: 'FAQ' },
        { to: '/contact', label: 'Contact' },
    ];

    const partnerUrl = config?.app_links?.partner_landing || config?.app_links?.transport_partner;

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur border-b border-slate-800' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo.svg" alt="DigitalSafari" className="h-11 w-11 rounded-full" />
                    <span className="font-bold text-lg text-white">{config?.site_name || 'DigitalSafari'}</span>
                </Link>

                <div className="hidden lg:flex items-center gap-6 text-sm">
                    {navLinks.map((link) => (
                        <Link key={link.to} to={link.to} className="text-slate-400 hover:text-emerald-400 transition">
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex items-center gap-3">
                    {partnerUrl && (
                        <Button href={partnerUrl} variant="secondary" size="sm">
                            Become a Partner
                        </Button>
                    )}
                    {config?.app_links?.customer && (
                        <Button href={config.app_links.customer} size="sm">
                            Start Your Journey
                        </Button>
                    )}
                </div>

                <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white text-2xl">
                    {mobileOpen ? '✕' : '☰'}
                </button>
            </div>

            {mobileOpen && (
                <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)} className="block text-slate-300 hover:text-emerald-400 py-2">
                            {link.label}
                        </Link>
                    ))}
                    {partnerUrl && (
                        <Button href={partnerUrl} variant="secondary" size="md" className="w-full">
                            Become a Partner
                        </Button>
                    )}
                    {config?.app_links?.customer && (
                        <Button href={config.app_links.customer} size="md" className="w-full">
                            Start Your Journey
                        </Button>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;