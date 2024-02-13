import React, {FC, SVGAttributes, Suspense, lazy} from 'react';
import clsx from 'clsx';

export const IconTypes = ['ChevronUp', 'ChevronRight', 'ChevronDown', 'ChevronLeft', 'Bars'] as const;
type IconPropName = (typeof IconTypes)[number];
interface IconComponentProps extends SVGAttributes<SVGElement> {}
/* eslint-ignore */
const iconComponents: {[key: string]: () => Promise<{default: FC<IconComponentProps>}>} = {
    ChevronUp: () => import('./Icons/ChevronUpSolid'),
    ChevronRight: () => import('./Icons/ChevronRightSolid'),
    ChevronDown: () => import('./Icons/ChevronDownSolid'),
    ChevronLeft: () => import('./Icons/ChevronLeftSolid'),
    Bars: () => import('./Icons/BarsSolid'),
};

export const SizeTypes = ['sm', 'md', 'lg'] as const;
type IconPropSize = (typeof SizeTypes)[number];

interface IconProps {
    name: IconPropName;
    size?: IconPropSize;
}

const Icon: FC<IconProps> = ({name, size}) => {
    const classes = clsx([size === 'sm' && 'h-4 w-4'], [size === 'md' && 'h-6 w-6'], [size === 'lg' && 'h-8 w-8']);

    const DynamicIconComponent = lazy(iconComponents[name]);

    if (!DynamicIconComponent) {
        return null;
    }

    return (
        <i role="img" aria-label={name} className="fill-current">
            <Suspense>
                <DynamicIconComponent className={classes} />
            </Suspense>
        </i>
    );
};

export default Icon;
