import clsx from 'clsx';
import React, {FC} from 'react';

export const VariantTypes = ['variant-1', 'variant-2'] as const;
type TemplateNamePropVariant = (typeof VariantTypes)[number];

interface TemplateNameProps {
    variant?: TemplateNamePropVariant;
    content?: string;
}

const TemplateName: FC<TemplateNameProps> = ({variant, content = 'TemplateName Component'}) => {
    const classes = clsx(
        [variant === 'variant-1' && 'v1-classes'],
        [variant === 'variant-2' && 'v2-classes'],
    );
    return <div className={classes}>{content}</div>;
};

export default TemplateName;
