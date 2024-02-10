import React, {FC, ReactNode} from 'react';
import './Text.scss';

interface TextProps {
    children?: ReactNode;
}

const Text: FC<TextProps> = ({children}) => {
    return <div className="prose">{children}</div>;
};

export default Text;
