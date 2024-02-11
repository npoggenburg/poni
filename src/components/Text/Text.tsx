import React, {FC, ReactNode} from 'react';
import './Text.scss';
import clsx from 'clsx';

export const VariantTypes = ['default', 'lead', 'small', 'tiny'] as const;
type TextPropVariant = (typeof VariantTypes)[number];

export const AsTypes = ['p', 'span', 'div'] as const;
type TextPropAs = (typeof AsTypes)[number];

interface TextProps {
    children?: ReactNode;
    variant?: TextPropVariant;
    as?: TextPropAs;
}

const Text: FC<TextProps> = ({children, variant = 'default', as = 'p'}) => {
    const As = as;

    const classes = clsx(
        ['prose'],
        [variant == 'tiny' && 'text-xs'],
        [variant == 'small' && 'prose-sm'],
        [variant == 'lead' && 'prose-lg'],
    );
    return <As className={classes}>{children}</As>;
};

export default Text;
