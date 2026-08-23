import React from 'react';
import { cn } from '../../utils/helpers';

type CardProps = {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
};

const Card = ({ children, className, hover = false }: CardProps) => {
    return (
        <div className={cn(
            'rounded-3xl border border-slate-800 bg-slate-900/80 p-6',
            hover && 'hover:border-emerald-500/50 hover:-translate-y-1 transition-all duration-300',
            className
        )}>
            {children}
        </div>
    );
};

export default Card;