'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary: 'text-white hover:shadow-lg active:scale-95',
  secondary: 'text-white hover:shadow-lg active:scale-95',
  outline: 'border font-semibold hover:shadow-md active:scale-95',
  ghost: 'hover:bg-white/5 active:scale-95',
};

const variantInlineStyles: Record<Variant, React.CSSProperties> = {
  primary: { backgroundColor: 'var(--color-primary)' },
  secondary: { backgroundColor: 'var(--color-surface)', color: 'var(--color-heading)' },
  outline: { borderColor: 'var(--color-border)', color: 'var(--color-primary)' },
  ghost: { color: 'var(--color-text)' },
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
};

const hoverStyles: Record<Variant, React.CSSProperties> = {
  primary: {},
  secondary: {},
  outline: {},
  ghost: {},
};

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type='button'
      disabled={isDisabled}
      className={`
        body-font
        inline-flex
        items-center
        justify-center
        rounded-full
        font-semibold
        transition-all
        duration-300
        ease-out
        focus:outline-none
        focus:ring-2
        focus:ring-orange-500
        focus:ring-offset-2
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${isDisabled
          ? 'cursor-not-allowed opacity-50'
          : 'cursor-pointer hover:-translate-y-1'
        }
        ${className}
      `}
      style={variantInlineStyles[variant]}
      {...props}
    >
      {/* Left Icon */}
      {!loading && leftIcon && (
        <span className='flex-shrink-0'>{leftIcon}</span>
      )}

      {/* Loading Spinner */}
      {loading && (
        <svg
          className='flex-shrink-0 animate-spin'
          width={size === 'sm' ? 14 : size === 'lg' ? 20 : 16}
          height={size === 'sm' ? 14 : size === 'lg' ? 20 : 16}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          />
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
          />
        </svg>
      )}

      {/* Label */}
      <span>{loading ? 'Loading...' : children}</span>

      {/* Right Icon */}
      {!loading && rightIcon && (
        <span className='flex-shrink-0'>{rightIcon}</span>
      )}
    </button>
  );
}