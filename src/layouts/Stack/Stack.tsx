import clsx from 'clsx';
import React, {Children, FC, ReactNode} from 'react';

export const DirectionTypes = ['row', 'col'] as const;
type StackPropDirection = (typeof DirectionTypes)[number];

export const SpacingTypes = ['none', 'sm', 'md', 'lg'] as const;
type StackPropSpacing = (typeof SpacingTypes)[number];

interface StackProps {
    divider?:
        | boolean
        | {
              sm?: boolean;
              md?: boolean;
              lg?: boolean;
              xl?: boolean;
              xxl?: boolean;
          };
    direction?:
        | StackPropDirection
        | {
              sm?: StackPropDirection;
              md?: StackPropDirection;
              lg?: StackPropDirection;
              xl?: StackPropDirection;
              xxl?: StackPropDirection;
          };
    children?: ReactNode;
    spacing?:
        | StackPropSpacing
        | {
              sm?: StackPropSpacing;
              md?: StackPropSpacing;
              lg?: StackPropSpacing;
              xl?: StackPropSpacing;
              xxl?: StackPropSpacing;
          };
}

const Stack: FC<StackProps> = ({children, divider = false, direction = 'row', spacing = 'md'}) => {
    const classes = clsx(
        [typeof spacing !== 'object' && spacing === 'sm' && 'gap-2'],
        [typeof spacing !== 'object' && spacing === 'md' && 'gap-4'],
        [typeof spacing !== 'object' && spacing === 'lg' && 'gap-8'],
        [typeof spacing == 'object' && spacing.sm === 'sm' && 'sm:gap-2'],
        [typeof spacing == 'object' && spacing.sm === 'md' && 'sm:gap-4'],
        [typeof spacing == 'object' && spacing.sm === 'lg' && 'sm:gap-8'],
        [typeof spacing == 'object' && spacing.md === 'sm' && 'md:gap-2'],
        [typeof spacing == 'object' && spacing.md === 'md' && 'md:gap-4'],
        [typeof spacing == 'object' && spacing.md === 'lg' && 'md:gap-8'],
        [typeof spacing == 'object' && spacing.lg === 'sm' && 'lg:gap-2'],
        [typeof spacing == 'object' && spacing.lg === 'md' && 'lg:gap-4'],
        [typeof spacing == 'object' && spacing.lg === 'lg' && 'lg:gap-8'],
        [typeof spacing == 'object' && spacing.xl === 'sm' && 'xl:gap-2'],
        [typeof spacing == 'object' && spacing.xl === 'md' && 'xl:gap-4'],
        [typeof spacing == 'object' && spacing.xl === 'lg' && 'xl:gap-8'],
        [typeof spacing == 'object' && spacing.xxl === 'sm' && '2xl:gap-2'],
        [typeof spacing == 'object' && spacing.xxl === 'md' && '2xl:gap-4'],
        [typeof spacing == 'object' && spacing.xxl === 'lg' && '2xl:gap-8'],
        [typeof direction !== 'object' && direction === 'col' && 'flex-col'],
        [typeof direction !== 'object' && direction === 'row' && 'flex-row'],
        [typeof direction === 'object' && direction.sm === 'row' && 'sm:flex-row'],
        [typeof direction === 'object' && direction.sm === 'col' && 'sm:flex-col'],
        [typeof direction === 'object' && direction.md === 'row' && 'md:flex-row'],
        [typeof direction === 'object' && direction.md === 'col' && 'md:flex-col'],
        [typeof direction === 'object' && direction.lg === 'row' && 'lg:flex-row'],
        [typeof direction === 'object' && direction.lg === 'col' && 'lg:flex-col'],
        [typeof direction === 'object' && direction.xl === 'row' && 'xl:flex-row'],
        [typeof direction === 'object' && direction.xl === 'col' && 'xl:flex-col'],
        [typeof direction === 'object' && direction.xxl === 'row' && '2xl:flex-row'],
        [typeof direction === 'object' && direction.xxl === 'col' && '2xl:flex-col'],
        [!divider && 'flex-wrap'],
        ['flex'],
    );

    const mappedChildren = Children.map(children, (child, index) => {
        const showDivider: boolean = divider && index + 1 < React.Children.count(children);
        return (
            <>
                {child}
                {showDivider && <hr className="h-auto border" />}
            </>
        );
    });
    return <div className={classes}>{mappedChildren}</div>;
};

export default Stack;
