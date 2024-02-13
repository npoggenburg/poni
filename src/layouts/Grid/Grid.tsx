import clsx from 'clsx';
import React, {ReactNode} from 'react';

interface GridProps {
    columns:
        | number
        | {
              sm?: number;
              md?: number;
              lg?: number;
              xl?: number;
              xxl?: number;
          };
    children?: ReactNode;
}

const Grid: React.FC<GridProps> = ({columns, children}) => {
    const classes = clsx(
        ['grid w-full gap-6'],
        [typeof columns !== 'object' && `grid-cols-${columns}`],
        [typeof columns === 'object' && columns.sm && 'sm:grid-cols-' + columns.sm],
        [typeof columns === 'object' && columns.md && 'md:grid-cols-' + columns.md],
        [typeof columns === 'object' && columns.lg && 'lg:grid-cols-' + columns.lg],
        [typeof columns === 'object' && columns.xl && 'xl:grid-cols-' + columns.xl],
        [typeof columns === 'object' && columns.xxl && '2xl:grid-cols-' + columns.xxl],
    );

    return <div className={classes}>{children}</div>;
};

export default Grid;
