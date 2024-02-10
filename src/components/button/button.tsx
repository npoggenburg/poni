import React, { FC } from 'react';
import './button.scss';
import clsx from 'clsx';

export const VariantTypes = [
  'primary',
  'secondary'
] as const;
type ButtonPropVariant = typeof VariantTypes[number];

export const SizeTypes = [
  'small',
  'medium',
  'large'
] as const;
type ButtonPropSize = typeof SizeTypes[number];

interface ButtonProps {
  label: string
  variant?: ButtonPropVariant
  size?: ButtonPropSize
}

const Button: FC<ButtonProps> = (
  {
    label,
    variant = VariantTypes[0],
    size = SizeTypes[1],
    ...props
  }) => {
  const variantClasses = clsx(
    [(variant === 'primary') && 'bg-blue-500 shadow-blue-500/20 text-white'],
    [(variant === 'secondary') && 'bg-red-500 shadow-red-500/20 text-white'],
    [(size === 'small') && 'py-2 px-4 text-xs'],
    [(size === 'medium') && 'py-3 px-6 text-sm'],
    [(size === 'large') && 'py-6 px-10'],
    ['align-middle select-none font-sans font-bold text-center uppercase transition-all rounded-lg shadow-md'],
    ['active:opacity-[0.85] active:shadow-none'],
    ['focus:opacity-[0.85] focus:shadow-none'],
    ['hover:shadow-lg hover:shadow-blue-500/40'],
    ['disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none'],
    ['inline-flex items-center']
  );

  return (
    <button
      type="button"
      className={variantClasses}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 me-2">
        <path fill='currentColor' d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
      </svg>
      {label}
      
    </button>
  )
}

export default Button