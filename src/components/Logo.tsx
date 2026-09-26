import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  size = 'md',
}) => {
  const isLight = variant === 'light';

  // Responsive sizing tailored for navbar, footer, modals, and headers
  const sizeClasses = {
    sm: 'h-8 sm:h-9 w-auto',
    md: 'h-11 sm:h-12 w-auto',
    lg: 'h-16 sm:h-20 w-auto',
    xl: 'h-20 sm:h-24 w-auto',
  };

  return (
    <div
      id="brand-logo"
      className={`inline-flex items-center select-none group transition-transform duration-200 hover:scale-[1.02] ${
        isLight
          ? 'bg-[#07192F] px-3 py-1.5 rounded-xl border border-slate-200/40 shadow-sm'
          : ''
      } ${className}`}
      aria-label="AW Comfort Heating & Cooling"
    >
      <picture>
        <source srcSet="/aw-comfort-logo.webp" type="image/webp" />
        <img
          src="/aw-comfort-logo.png"
          alt="AW Comfort Heating & Cooling"
          width="800"
          height="465"
          className={`${sizeClasses[size]} object-contain drop-shadow-sm`}
          loading="eager"
          decoding="async"
        />
      </picture>
    </div>
  );
};


