import React from 'react';
import { cn } from '../../utils/helpers';

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit';
    disabled?: boolean;
};

const Button = ({ children, variant = 'primary', size = 'md', href, onClick, className, type = 'button', disabled }: ButtonProps) => {
    const base = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5';
    
    const variants = {
        primary: 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25',
        secondary: 'border border-slate-700 text-white hover:border-emerald-400 hover:text-emerald-400',
        ghost: 'text-slate-400 hover:text-white',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base',
    };

    const classes = cn(base, variants[variant], sizes[size], className);

    if (href) {
        return <a href={href} className={classes}>{children}</a>;
    }

    return (
        <button type={type} onClick={onClick} disabled={disabled} className={cn(classes, disabled && 'opacity-50 cursor-not-allowed')}>
            {children}
        </button>
    );
};

export default Button;