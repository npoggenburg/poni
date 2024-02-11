import clsx from 'clsx';
import React, {FC, ReactNode} from 'react';

export const BackgroundTypes = ['white', 'gray', 'pink'] as const;
type SectionPropBackground = (typeof BackgroundTypes)[number];

interface SectionProps {
    children?: ReactNode;
    background?: SectionPropBackground;
}

const Section: FC<SectionProps> = ({children, background = 'white'}) => {
    const classes = clsx(
        [background !== 'white' && 'py-12 first:mt-0 last:mb-0'],
        [background === 'gray' && 'bg-gray-100'],
        [background === 'pink' && 'bg-pink-600'],
        ['my-12 px-4'],
        ['lg:px-6'],
    );
    return (
        <section className={classes}>
            <div className={clsx(['mx-auto max-w-screen-xl'])}>{children}</div>
        </section>
    );
};

export default Section;
