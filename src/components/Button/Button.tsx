import React, {FC, ReactNode, Suspense, lazy} from 'react';
import clsx from 'clsx';
import {IconTypes} from '../Icon/Icon';

export const VariantTypes = ['primary', 'secondary'] as const;
type ButtonPropVariant = (typeof VariantTypes)[number];

export const SizeTypes = ['sm', 'md', 'lg'] as const;
type ButtonPropSize = (typeof SizeTypes)[number];

export const IconPositionTypes = ['before', 'after'] as const;
type ButtonPropIconPosition = (typeof IconPositionTypes)[number];

interface ButtonProps {
    children?: ReactNode;
    variant?: ButtonPropVariant;
    size?: ButtonPropSize;
    icon?: (typeof IconTypes)[number];
    iconPosition?: ButtonPropIconPosition;
}

const Button: FC<ButtonProps> = ({
    children,
    variant = VariantTypes[0],
    size = SizeTypes[1],
    icon,
    iconPosition = 'before',
    ...props
}) => {
    const variantClasses = clsx(
        [variant === 'primary' && 'bg-blue-500 text-white shadow-blue-500/20'],
        [variant === 'secondary' && 'bg-red-500 text-white shadow-red-500/20'],
        [size === 'sm' && 'gap-2 px-4 py-2 text-xs'],
        [size === 'md' && 'gap-2 px-6 py-3 text-sm'],
        [size === 'lg' && 'gap-4 px-10 py-6'],
        [
            'select-none rounded-lg text-center align-middle font-sans font-bold uppercase shadow-md transition-all',
        ],
        ['active:opacity-[0.85] active:shadow-none'],
        ['focus:opacity-[0.85] focus:shadow-none'],
        ['hover:shadow-lg hover:shadow-blue-500/40'],
        ['disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'],
        ['inline-flex items-center'],
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
    return (
        <button type="button" className={variantClasses} {...props}>
            {iconPosition === 'before' && iconComponent}
            {children}
            {iconPosition === 'after' && iconComponent}
        </button>
    );
};

export default Button;
