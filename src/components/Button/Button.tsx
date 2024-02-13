import React, {FC, ReactNode, Suspense, lazy} from 'react';
import clsx from 'clsx';
import {IconTypes} from '../Icon/Icon';

export const VariantTypes = ['filled', 'outlined', 'text'] as const;
type ButtonPropVariant = (typeof VariantTypes)[number];

export const ColorTypes = ['black', 'white', 'gray', 'primary'] as const;
type ButtonPropColor = (typeof ColorTypes)[number];

export const AsTypes = ['a', 'button'] as const;
type ButtonPropAs = (typeof AsTypes)[number];

export const SizeTypes = ['sm', 'md', 'lg'] as const;
type ButtonPropSize = (typeof SizeTypes)[number];

export const IconPositionTypes = ['before', 'after'] as const;
type ButtonPropIconPosition = (typeof IconPositionTypes)[number];

interface ButtonProps {
    children?: ReactNode;
    variant?: ButtonPropVariant;
    size?: ButtonPropSize;
    color?: ButtonPropColor;
    icon?: (typeof IconTypes)[number];
    iconPosition?: ButtonPropIconPosition;
    fullWidth?: boolean;
    as?: ButtonPropAs;
}

const Button: FC<ButtonProps> = ({
    children,
    variant = 'filled',
    size = 'md',
    fullWidth = false,
    icon,
    color = 'primary',
    iconPosition = 'before',
    as = 'button',
    ...props
}) => {
    const variantClasses = clsx(
        [variant === 'filled' && ''],
        [variant === 'filled' && color === 'black' && 'bg-gray-900 text-white hover:bg-gray-950'],
        [variant === 'filled' && color === 'white' && 'bg-white text-black hover:bg-gray-100'],
        [variant === 'filled' && color === 'gray' && 'bg-gray-100 text-gray-800 hover:bg-gray-200'],
        [variant === 'filled' && color === 'primary' && 'bg-pink-600 text-white hover:bg-pink-700'],
        [variant === 'outlined' && 'border-2'],
        [variant === 'outlined' && color === 'black' && 'border-gray-900 text-gray-900 hover:border-gray-200'],
        [variant === 'outlined' && color === 'white' && 'border-white text-white hover:border-white/50'],
        [variant === 'outlined' && color === 'gray' && 'border-gray-300 text-gray-800 hover:border-gray-500'],
        [variant === 'outlined' && color === 'primary' && 'border-pink-600 text-pink-600 hover:border-pink-600/50'],
        [variant === 'text' && 'hover:bg-black/10'],
        [variant === 'text' && color === 'black' && 'text-gray-900'],
        [variant === 'text' && color === 'white' && 'text-white'],
        [variant === 'text' && color === 'gray' && 'text-gray-400'],
        [variant === 'text' && color === 'primary' && 'text-pink-600'],
        [size === 'sm' && children && 'gap-2 px-4 py-2 text-xs'],
        [size === 'md' && children && 'gap-2 px-6 py-3 text-sm'],
        [size === 'lg' && children && 'gap-4 px-10 py-6'],
        [size === 'sm' && !children && 'gap-2 px-2 py-2 text-xs'],
        [size === 'md' && !children && 'gap-2 px-3 py-3 text-sm'],
        [size === 'lg' && !children && 'gap-4 px-6 py-6'],
        [fullWidth === true && 'w-full'],
        ['select-none rounded-lg text-center align-middle font-bold uppercase transition-all'],
        ['active:opacity-[.85]'],
        ['focus:ring focus:ring-black/10'],
        ['disabled:pointer-events-none disabled:opacity-50'],
        ['inline-flex items-center justify-center'],
    );

    const iconSize = size === 'lg' ? 'md' : 'sm';

    const Icon = lazy(() => import('../Icon/Icon'));
    let iconComponent;
    if (icon) {
        iconComponent = (
            <Suspense>
                <Icon name={icon} size={iconSize} />
            </Suspense>
        );
    }
    if (!children) {
        props['aria-label'] = 'Describle functinality';
    }
    if (as === 'a') {
        props['href'] = '#';
    }
    if (as === 'button') {
        props['type'] = 'button';
    }
    const As = as;
    return (
        <As className={variantClasses} {...props}>
            {iconPosition === 'before' && iconComponent}
            {children}
            {iconPosition === 'after' && iconComponent}
        </As>
    );
};

export default Button;
