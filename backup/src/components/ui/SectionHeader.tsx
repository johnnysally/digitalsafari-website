import React from 'react';

type SectionHeaderProps = {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
};

const SectionHeader = ({ title, subtitle, align = 'center' }: SectionHeaderProps) => {
    return (
        <div className={align === 'center' ? 'text-center max-w-3xl mx-auto' : 'text-left'}>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">{title}</h2>
            {subtitle && <p className="mt-4 text-lg text-slate-400">{subtitle}</p>}
        </div>
    );
};

export default SectionHeader;