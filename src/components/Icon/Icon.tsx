import React, {FC, Suspense, lazy} from 'react';
import './Icon.scss';
import clsx from 'clsx';

export const IconTypes = ['chevron-up', 'chevron-right', 'chevron-down', 'chevron-left'] as const;
type IconPropName = (typeof IconTypes)[number];

export const SizeTypes = ['sm', 'md', 'lg'] as const;
type IconPropSize = (typeof SizeTypes)[number];

interface IconProps {
    name: IconPropName;
    size?: IconPropSize;
}

const Icon: FC<IconProps> = ({name, size}) => {
    const ChevronUpIcon = lazy(() => import('./Icons/Chevron-up-solid'));
    const ChevronRightIcon = lazy(() => import('./Icons/Chevron-right-solid'));
    const ChevronDownIcon = lazy(() => import('./Icons/Chevron-down-solid'));
    const ChevronLeftIcon = lazy(() => import('./Icons/Chevron-left-solid'));

    const classes = clsx(
        [size === 'sm' && 'h-4 w-4'],
        [size === 'md' && 'h-6 w-6'],
        [size === 'lg' && 'h-8 w-8'],
    );
    console.log(classes);
    const iconComponents: {[key: string]: JSX.Element} = {
        'chevron-up': <ChevronUpIcon className={classes} />,
        'chevron-right': <ChevronRightIcon className={classes} />,
        'chevron-down': <ChevronDownIcon className={classes} />,
        'chevron-left': <ChevronLeftIcon className={classes} />,
    };

    const IconComponent = iconComponents[name];

    if (!IconComponent) {
        return null;
    }

    return (
        <i>
            <Suspense>{IconComponent}</Suspense>
        </i>
    );
};

export default Icon;
