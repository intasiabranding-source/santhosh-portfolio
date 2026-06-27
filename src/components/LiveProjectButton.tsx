import React from 'react';

interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href,
  onClick,
  className = '',
  label = 'Live Project',
}) => {
  const baseClasses = `inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-center px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-all duration-300 ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {label}
    </button>
  );
};
