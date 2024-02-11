import React, {FC, ReactNode} from 'react';
import clsx from 'clsx';

export const VariantTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
type HeadingPropVariant = (typeof VariantTypes)[number];

export const AsTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'] as const;
type HeadingPropAs = (typeof AsTypes)[number];

interface HeadingProps {
    variant: HeadingPropVariant;
    as?: HeadingPropAs;
    children?: ReactNode;
}

const Heading: FC<HeadingProps> = ({as, variant, children}) => {
    const As = as ? as : variant;
    const classes = clsx(
        ['flex items-center gap-2'],
        [variant === 'h1' && 'text-5xl font-extrabold'],
        [variant === 'h2' && 'text-4xl font-bold'],
        [variant === 'h3' && 'text-3xl font-bold'],
        [variant === 'h4' && 'text-2xl font-bold'],
        [variant === 'h5' && 'text-xl font-bold'],
        [variant === 'h6' && 'text-lg font-bold'],
    );
    return <As className={classes}>{children}</As>;
};

export default Heading;
