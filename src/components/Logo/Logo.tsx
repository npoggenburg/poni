import clsx from 'clsx';
import React, {FC} from 'react';

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
    const classes = clsx(['self-center whitespace-nowrap text-lg uppercase']);
    return (
        <div className={classes}>
            <span className="font-light">Nico</span>
            <span className=" font-bold">Poggenburg</span>
        </div>
    );
};

export default Logo;
